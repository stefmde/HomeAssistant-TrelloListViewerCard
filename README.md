
# Trello List Viewer Card for HomeAssistant

Sample Image TBD


HACS Badge TBD


## Description
TBD
  

## Properties

### Global
TBD

| Name | Type | Default | Description |
|--|--|--|--|
| `global_credentials_access_token` | `string` | `null` | The AccessToken of your Twitch app. [See below on how to create one.](https://github.com/stefmde/HomeAssistant-TwitchFollowedLiveStreamsCard/tree/main#twitch-add-dev-app) Will break the card and log an error if empty or invalid. |
| `global_credentials_client_id` | `string` | `null` | The ClientId of your Twitch app. [See below on how to create one.](https://github.com/stefmde/HomeAssistant-TwitchFollowedLiveStreamsCard/tree/main#twitch-add-dev-app) Will break the card and log an error if empty or invalid. |
| `global_credentials_user_name` | `string` | `null` | Your Twitch username. Will break the card and log an error if empty or invalid. |
| `global_debug` | `bool` | `false` | Can be set to `true` if you have problems to see more details in the console log. |
| `global_show_header` | `bool` | `true` | Shows the card header with the count if set to `true`. |
| `global_update_interval_s` | `int` | `60` | The time in seconds used for the interval to update the streams displayed. |


### Cards
TBD

| Name | Type | Default | Description |
|--|--|--|--|
| `streams_disable_auto_refresh` | `bool` | `false` | Disables auto refreshing the streams if set to `true`. Can be useful if you want to refresh it manually. |


## Trello API Keys
TBD


## Samples
Here are some sample configs to show you some possible configurations and help you find your config. The samples only shows the properties which are required or different from the default values. All the properties can be found [here.](https://github.com/stefmde/HomeAssistant-TrelloListViewerCard/tree/main#properties)


### My favorite

TBD


## Debug
1. You can use the property `global_debug` and set it to `true` to see more logs in the console.
2. If the Integration isn't working check the properties TBD  to be correctly set matching the [App](https://github.com/stefmde/HomeAssistant-TrelloListViewerCard/tree/main#trello-api-keys) you created.
