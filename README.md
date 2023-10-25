
# Trello List Viewer Card for HomeAssistant

| Trello Cards | Home Assistant Preview |
|--|--|
| ![Trello Cards](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/test-cards-in-trello.png) | ![Home Assistant Preview](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/favorite_config.png) |

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)


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

![Sample image to show the config](https://raw.githubusercontent.com/stefmde/HomeAssistant-TwitchFollowedLiveStreamsCard/main/img/basic_config.png)

### My favorite
![Home Assistant Preview](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/favorite_config.png)

    type: custom:trello-list-viewer-card
    global_credentials_api_key: 6dr2aiH3VudFRgEtM8GXgi66UvadRDez
    global_credentials_api_token: npeRfv3EVaGGdG7F6uH2WzNjqVAgKUxGcpcgb2hbpyE4rUrKfZiRfiTyNcBiMPiFC7Y9VoFXB869
    global_credentials_board_name: Tasks
    global_credentials_list_name: Test
    global_important_label_name: Important
    global_cards_limit_count: 12
    cards_show_labels: false
    cards_show_label_text: false
    cards_show_due: false


### Basic
![Home Assistant Preview](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/basic_config.png)

    type: custom:trello-list-viewer-card
    global_credentials_api_key: 6dr2aiH3VudFRgEtM8GXgi66UvadRDez
    global_credentials_api_token: npeRfv3EVaGGdG7F6uH2WzNjqVAgKUxGcpcgb2hbpyE4rUrKfZiRfiTyNcBiMPiFC7Y9VoFXB869
    global_credentials_board_name: Tasks
    global_credentials_list_name: Test
    global_important_label_name: Important

## Debug
1. You can use the property `global_debug` and set it to `true` to see more logs in the console.
2. If the Integration isn't working check the properties TBD  to be correctly set matching the [App](https://github.com/stefmde/HomeAssistant-TrelloListViewerCard/tree/main#trello-api-keys) you created.
