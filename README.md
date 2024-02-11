
# Trello List Viewer Card for HomeAssistant

| Trello Cards Source | Home Assistant Preview |
|--|--|
| ![Trello Cards](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/test-cards-in-trello.png) | ![Home Assistant Preview](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/basic_config.png) |

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg?style=for-the-badge)](https://github.com/custom-components/hacs)


## Description
A Plugin for Home Assistant to show a list of your Trello Board to keep track of your cards

## Properties

### Global

| Name | Type | Default | Description |
|--|--|--|--|
| `global_credentials_api_key` | `string` | `null` | The API key provided by trello for your created app. See below on how to get/creat it. Required. |
| `global_credentials_api_token` | `string` | `null` | The API token provided by trello for your created app. See below on how to get/creat it. Required. |
| `global_credentials_board_name` | `string` | `null` | The name of your Board. Required. |
| `global_credentials_list_name` | `string` | `null` | The name of the list on your board which you want to be displayed. Required. |
| `global_important_label_name` | `string` | `null` | If you have defined a label for importance, you can specify the name here. |
| `global_debug` | `bool` | `false` | If you have trouble to get it working, you kan enable this to get more info on the console. |
| `global_show_header` | `bool` | `true` | Show the Header with the count. |
| `global_show_header_sub_total` | `bool` | `true` | Show the count in the header how much cards are displayed, if lower than the total available cards. |
| `global_update_interval_s` | `int` | `60000` | The interval on how fast it is updated. |
| `global_disable_auto_refresh` | `bool` | `false` | You can also disable auto refreshing the cards if you want to do it by yourself. |
| `global_reduce_requests` | `bool` | `false` | TBD or remove or rename? |


### Cards

| Name | Type | Default | Description |
|--|--|--|--|
| `cards_limit_count` | `int` | `100` | The maximum amount of cards to be shown. |
| `cards_click_behavior` | `enum` | `none` | TBD. |
| `cards_click_confirm` | `bool` | `true` | TBD. |
| `cards_click_move_to_list` | `` | `null` | TBD. |
| `cards_show_labels` | `bool` | `true` | Enable to show the labels of your cards. |
| `cards_show_label_text` | `bool` | `true` | Enable to even show the text of your lablels. |
| `cards_show_due` | `bool` | `true` | Show the due date of your cards if you have set one. |
| `cards_show_desc` | `bool` | `false` | Show the description of your card if you have set one. May really bloat your view. |
| `cards_show_is_important` | `bool` | `true` | Can yhow the importance of the card if the label for it is specified in `global_important_label_name`. |
| `cards_sort_by_name` | `bool` | `false` | By default the sorting of the cards is based on the sorting on your board in Trello but you can also sort them by name here if you want to. |


### Done

| Name | Type | Default | Description |
|--|--|--|--|
| `done_show` | `bool` | `false` | Show how much cards you have done. Requires `done_list_name` and you need to move your cards to this list if your have finished them. |
| `done_list_name` | `string` | `null` | The name of the list with your cards you have already finished/done. |
| `done_show_total` | `bool` | `false` | Show the total number of cards in your done list. |
| `done_show_last_seven_days` | `bool` | `true` | Show the number of cards in your done list which have been last modified (possible moved to this list) in the last seven days. |


## Trello API Keys

 1. Create a new `Power-Up or Integration` here: https://trello.com/power-ups/admin
 	 1. Set a name for it like `Home Assistant`
 	 2. Select your `Workspace`
 	 3. `Iframe URL` can be blank
 	 4. `Email`, `Support contact` and `Auther` must be filled in with your data
 	 5. Click `Create`
 2. After that `Generate a new API key`by clicking the matching button
 3. On the following page you can copy the `API key` 
 4. On the right side of that is a link called `Token` click that and then `Allow` to generate the matching `API token`
 5. Copy the `API token` on the following site und save it
 6. Paste thows two values in the matching property in the config


## Samples
Here are some sample configs to show you some possible configurations and help you find your config. The samples only shows the properties which are required or different from the default values. All the properties can be found [here.](https://github.com/stefmde/HomeAssistant-TrelloListViewerCard/tree/main#properties)


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
