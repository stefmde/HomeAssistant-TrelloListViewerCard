
# Trello List Viewer Card for HomeAssistant

| Trello Cards Source | Home Assistant Preview |
|--|--|
| ![Trello Cards](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/test-cards-in-trello.png) | ![Home Assistant Preview](https://raw.githubusercontent.com/stefmde/HomeAssistant-TrelloListViewerCard/main/img/basic_config.png) |

[![hacs_badge](https://img.shields.io/badge/HACS-Default-41BDF5.svg?style=for-the-badge)](https://github.com/hacs/integration)


## Description
TBD
  

## Properties

### Global
TBD

| Name | Type | Default | Description |
|--|--|--|--|
| `global_credentials_api_key` | `string` | `null` | . |
| `global_credentials_api_token` | `string` | `null` | . |
| `global_credentials_board_name` | `string` | `null` | . |
| `global_credentials_list_name` | `string` | `null` | . |
| `global_important_label_name` | `string` | `null` | . |
| `global_debug` | `bool` | `false` | . |
| `global_show_header` | `bool` | `true` | . |
| `global_show_header_sub_total` | `bool` | `true` | . |
| `global_update_interval_s` | `int` | `60000` | . |
| `global_disable_auto_refresh` | `bool` | `false` | . |
| `global_reduce_requests` | `bool` | `false` | . |


### Cards
TBD

| Name | Type | Default | Description |
|--|--|--|--|
| `cards_limit_count` | `int` | `100` | . |
| `cards_click_behavior` | `enum` | `none` | TBD. |
| `cards_click_confirm` | `bool` | `true` | TBD. |
| `cards_click_move_to_list` | `` | `null` | TBD. |
| `cards_show_labels` | `bool` | `true` | . |
| `cards_show_label_text` | `bool` | `true` | . |
| `cards_show_due` | `bool` | `true` | . |
| `cards_show_desc` | `bool` | `false` | . |
| `cards_show_is_important` | `bool` | `true` | . |
| `cards_sort_by_name` | `bool` | `false` | . |


### Done
TBD

| Name | Type | Default | Description |
|--|--|--|--|
| `done_show` | `bool` | `false` | . |
| `done_list_name` | `string` | `null` | . |
| `done_show_total` | `bool` | `false` | . |
| `done_show_last_seven_days` | `bool` | `true` | . |


## Trello API Keys
TBD


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
