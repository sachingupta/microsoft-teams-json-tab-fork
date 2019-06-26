import * as React from 'react';
import { Text, Input, Dropdown, InputProps } from '@stardust-ui/react';
import * as microsoftTeams from '@microsoft/teams-js';
import { getSupportedCommands } from '../api/api';
import { HtmlInputEvents } from '@stardust-ui/react/dist/es/lib/htmlPropsUtils';
import { isInitialRun } from '../utils/utils';

export const SettingsView: React.FC = (): JSX.Element => {
  // STATE HOOKS
  const [CommandList, setCommandList] = React.useState([] as microsoftTeams.bot.ICommand[]);
  const [CommandSelected, setCommandSelected] = React.useState('');
  const [TabName, setTabName] = React.useState('JSONTabDefault');
  // HANDLERS
  const onError = (error: string): void => {
    alert(error);
  };

  const onGetCommandResponse = (response: microsoftTeams.bot.ICommand[]): void => {
    setCommandList(response);
    microsoftTeams.appInitialization.notifySuccess();
  };

  const handleNameChange = (event: any): void => {
    setTabName(event.target.value);
  };

  const handleCommandChange = (event: any, res: any): void => {
    const command = CommandList.find(
      (item: microsoftTeams.bot.ICommand) => item.title === res.value,
    ) as microsoftTeams.bot.ICommand;
    setCommandSelected(command.id);
    microsoftTeams.settings.setValidityState(true);
  };

  // EFFECT HOOKS
  React.useEffect((): void => {
    microsoftTeams.initialize();
    microsoftTeams.appInitialization.notifyAppLoaded();
    let contentUrl = isInitialRun()
      ? `https://microsoft-teams-json-tab.azurewebsites.net?theme={theme}&frameContext=content&commandId=${CommandSelected}`
      : `https://microsoft-teams-json-tab.azurewebsites.net?theme={theme}&frameContext=content&commandId=${CommandSelected}&initialRun=true`;
    microsoftTeams.settings.registerOnSaveHandler((saveEvent: microsoftTeams.settings.SaveEvent): void => {
      microsoftTeams.settings.setSettings({
        entityId: 'JSONTab',
        contentUrl: contentUrl,
        suggestedDisplayName: TabName,
      });
      saveEvent.notifySuccess();
    });
    getSupportedCommands(onGetCommandResponse, onError);
  });

  return (
    <div>
      <div>
        <Text size={'medium'} content={'Name your tab'} />
      </div>
      <Input fluid placeholder={'Tab name'} onChange={handleNameChange} />
      <div>
        <Text size={'medium'} content={"Select the command you'd like query your bot with"} />
      </div>
      <Dropdown
        fluid
        items={CommandList.map((command: microsoftTeams.bot.ICommand): string => {
          return command.title;
        })}
        noResultsMessage="We couldn't find any matches."
        onSelectedChange={handleCommandChange}
        placeholder="Select the command"
      />
    </div>
  );
};
