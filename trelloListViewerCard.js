class TrelloListViewerCard extends HTMLElement
{
    set hass(hass)
    {
        if (!this.content)
        {
            const config = this.config;
            const card = document.createElement('HA-card');

            // ### BASIC ELEMENTS
            // ##################################################

            // ### Global
            this.content = document.createElement("div");
            card.appendChild(this.content);
            this.appendChild(card);
            const content = this.content;

            // ### cardHeaderDiv
            const cardHeaderDiv = document.createElement("div");

            const doneDiv = document.createElement("div");
            doneDiv.style.paddingLeft = this.config.streams_padding_left_size !== undefined ? this.config.streams_padding_left_size : "1em";
            doneDiv.style.paddingRight = this.config.streams_padding_right_size !== undefined ? this.config.streams_padding_right_size : "1em";
            doneDiv.style.paddingTop = this.config.streams_padding_top_size !== undefined ? this.config.streams_padding_top_size : "0em";
            doneDiv.style.paddingBottom = this.config.streams_padding_bottom_size !== undefined ? this.config.streams_padding_bottom_size : "0em";

            // ### Cards
            const cardsDiv = document.createElement("div");
            cardsDiv.style.overflow = "hidden";
            cardsDiv.style.paddingLeft = this.config.streams_padding_left_size !== undefined ? this.config.streams_padding_left_size : "1em";
            cardsDiv.style.paddingRight = this.config.streams_padding_right_size !== undefined ? this.config.streams_padding_right_size : "1em";
            cardsDiv.style.paddingTop = this.config.streams_padding_top_size !== undefined ? this.config.streams_padding_top_size : "0em";
            cardsDiv.style.paddingBottom = this.config.streams_padding_bottom_size !== undefined ? this.config.streams_padding_bottom_size : "0em";

            // ### Constants
            const const_url_get_current_user = "https://api.trello.com/1/members/me"
            const const_url_get_boards_belongs_to_member = "https://api.trello.com/1/members/{member_id}/boards"; // GET https://developer.atlassian.com/cloud/trello/rest/api-group-members/#api-members-id-boards-get   
            const const_url_get_labels_on_board = "https://api.trello.com/1/boards/{board_id}/labels"; // GET https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-labels-get
            const const_url_get_lists_of_board = "https://api.trello.com/1/boards/{board_id}/lists"; // GET https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-lists-get
            const const_url_get_cards_on_list = "https://api.trello.com/1/lists/{list_id}/cards"; // GET https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-cards-get
            // const const_url_get_board_by_id = "https://api.trello.com/1/boards/{board_id}"; // GET https://developer.atlassian.com/cloud/trello/rest/api-group-boards/#api-boards-id-get
            const const_url_update_card = "https://api.trello.com/1/cards/{card_id}"; // PUT https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-put
            const const_url_delete_card = "https://api.trello.com/1/cards/{card_id}"; // DELETE https://developer.atlassian.com/cloud/trello/rest/api-group-cards/#api-cards-id-delete

            // ### Get Config
            // Global
            const config_global_credentials_api_key = this.config.global_credentials_api_key !== undefined ? this.config.global_credentials_api_key : null;
            const config_global_credentials_api_token = this.config.global_credentials_api_token !== undefined ? this.config.global_credentials_api_token : null;
            const config_global_board_name = this.config.global_credentials_board_name !== undefined ? this.config.global_credentials_board_name : null;
            const config_global_list_name = this.config.global_credentials_list_name !== undefined ? this.config.global_credentials_list_name : null;
            const config_global_important_label_name = this.config.global_important_label_name !== undefined ? this.config.global_important_label_name : null;
            
            const config_global_debug = this.config.global_debug !== undefined ? this.config.global_debug : false;
            const config_global_show_header = this.config.global_show_header !== undefined ? this.config.global_show_header : true;
            const config_global_show_header_sub_total = this.config.global_show_header_sub_total !== undefined ? this.config.global_show_header_sub_total : true;
            const config_global_update_interval_s = this.config.global_update_interval_s !== undefined ? this.config.global_update_interval_s * 1000 : 60 * 1000;
            const config_global_disable_auto_refresh = this.config.global_disable_auto_refresh !== undefined ? this.config.global_disable_auto_refresh : false;
            const config_global_reduce_requests = this.config.global_reduce_requests !== undefined ? this.config.global_reduce_requests : false;

            // Cards
            const config_cards_limit_count = this.config.global_cards_limit_count !== undefined ? this.config.global_cards_limit_count : 100;
            const config_cards_click_behavior = this.config.global_cards_click_behavior !== undefined ? this.config.global_cards_click_behavior : "none"; // TODO open, move, close, delete, none
            const config_cards_click_confirm = this.config.global_cards_click_confirm !== undefined ? this.config.global_cards_click_confirm : true;
            const config_cards_click_move_to_list = this.config.global_cards_click_move_to_list !== undefined ? this.config.global_cards_click_move_to_list : null;
            
            const config_cards_show_labels = this.config.cards_show_labels !== undefined ? this.config.cards_show_labels : true;
            const config_cards_show_label_text = this.config.cards_show_label_text !== undefined ? this.config.cards_show_label_text : true;
            const config_cards_show_due = this.config.cards_show_due !== undefined ? this.config.cards_show_due : true;
            const config_cards_show_desc = this.config.cards_show_desc !== undefined ? this.config.cards_show_desc : false;
            const config_cards_show_is_important = this.config.cards_show_is_important !== undefined ? this.config.cards_show_is_important : true;
            const config_cards_sort_by_name = this.config.cards_sort_by_name !== undefined ? this.config.cards_sort_by_name : false;

            // Done
            const config_done_show = this.config.done_show !== undefined ? this.config.done_show : false;
            const config_done_list_name = this.config.done_list_name !== undefined ? this.config.done_list_name : null;
            const config_done_show_total = this.config.done_total !== undefined ? this.config.done_total : false;
            const config_done_show_last_seven_days = this.config.done_last_seven_days !== undefined ? this.config.done_last_seven_days : true;

            let trelloData = new TrelloData();
            let cardDatas = [];
            let doneData = new DoneData();
            let previousCardDataCount = -1;

            // ### Functions
            // ##################################################
            async function main()
            {
                checkRequiredProperties();
                await getCurrentUser();
                await getBoard();
                await getImportantLabel();
                await getLists();
                cardDatas = await getCards(trelloData.listId);
                orderCards();
                if(config_global_debug) console.log(cardDatas);
                await getDoneCounts();
                if(cardDatas.length == previousCardDataCount && config_global_reduce_requests) {
                    return;
                }
                printHeader();
                printDoneCounts();
                printCards();
                previousCardDataCount = cardDatas.length;
            }

            // ### Local Helpers
            function checkRequiredProperties() {
                if(config_global_credentials_api_key == null) {
                    console.error("TwitchFollowedLiveStreamsCard: Property 'global_credentials_api_key' is required and not set.");
                }
                if(config_global_credentials_api_token == null) {
                    console.error("TwitchFollowedLiveStreamsCard: Property 'global_credentials_api_token' is required and not set.");
                }
                if(config_global_board_name == null) {
                    console.error("TwitchFollowedLiveStreamsCard: Property 'global_board_name' is required and not set.");
                }
                if(config_global_list_name == null) {
                    console.error("TwitchFollowedLiveStreamsCard: Property 'global_list_name' is required and not set.");
                }
                if(config_cards_click_behavior == "move" && config_cards_click_move_to_list == null) {
                    console.error("TwitchFollowedLiveStreamsCard: Property 'cards_click_move_to_list' is required and not set.");
                }
            }

            async function getCurrentUser() {
                const currentUser = await getJson(const_url_get_current_user);
                trelloData.userId = currentUser.id;
                trelloData.userName = currentUser.username;
            }

            async function getBoard() {
                let url = const_url_get_boards_belongs_to_member;
                url = url.replace("{member_id}", trelloData.userId);

                const boards = await getJson(url);
                const board = boards.find(obj => {
                                return obj.name === config_global_board_name;
                            });
                
                trelloData.boardId = board.id;
                trelloData.boardName = board.name;
            }

            async function getImportantLabel() {
                let url = const_url_get_labels_on_board;
                url = url.replace("{board_id}", trelloData.boardId);

                const labels = await getJson(url);
                const label = labels.find(obj => {
                                return obj.name === config_global_important_label_name;
                            });
                
                trelloData.importantLabelId = label.id;
                trelloData.importantLabelName = label.name;
                trelloData.importantLabelColor = label.color;
            }

            async function getLists() {
                const [listId, listName] = await getList(config_global_list_name);
                trelloData.listId = listId;
                trelloData.listName = listName;

                if(config_done_show) {
                    const [doneListId, doneListName] = await getList(config_done_list_name);
                    trelloData.doneListId = doneListId;
                    trelloData.doneListName = doneListName;
                }
            }

            async function getList(listName) {
                let url = const_url_get_lists_of_board;
                url = url.replace("{board_id}", trelloData.boardId);

                const lists = await getJson(url);
                const list = lists.find(obj => {
                                return obj.name === listName;
                            });
                
                return [list.id, list.name];
            }

            async function getCards(listId) {
                let url = const_url_get_cards_on_list;
                url = url.replace("{list_id}", listId);

                const cards = await getJson(url);
                const localCardDatas = [];
                for (let i = 0; i < cards.length; i++) {
                    localCardDatas.push(parseCard(cards[i]));
                }

                return localCardDatas;
            }

            function dateAddDays(date, days) {
                const localDate = new Date(date);
                localDate.setDate(localDate.getDate() + days);
                return localDate;
            }

            async function getDoneCounts() {
                if(!config_done_show) {
                    doneData.totalCount = 0;
                    doneData.lastSevenDaysCount = 0;
                    return;
                }

                const cards = await getCards(trelloData.doneListId);
                const dateSevenDaysAgo = dateAddDays(Date.now(), -7);
                doneData.totalCount = cards.length;
                doneData.lastSevenDaysCount = 0;

                for (let i = 0; i < cards.length; i++) {
                    if(cards[i].dateLastActivity > dateSevenDaysAgo){
                        doneData.lastSevenDaysCount++;
                    }
                }
                if(config_global_debug) console.log(doneData);
            }

            function parseCard(card) {
                const newCard = new CardData();
                newCard.id = card.id;
                newCard.name = card.name;
                newCard.desc = card.desc;
                newCard.due = card.due;
                newCard.dueComplete = card.dueComplete;
                newCard.labels = card.labels;
                newCard.pos = card.pos;
                if(newCard.labels == null || newCard.labels == undefined) {
                    newCard.labels = [];
                }

                newCard.shortUrl = card.shortUrl;
                newCard.dateLastActivity = Date.parse(card.dateLastActivity);
                newCard.isImportant = newCard.labels.some((x) => x.id == trelloData.importantLabelId);
                return newCard;
            }

            function orderCards() {
                let importants = cardDatas.filter((card) => card.isImportant);
                importants = sortCards(importants);
                
                let notImportants = cardDatas.filter((card) => !card.isImportant);
                notImportants = sortCards(notImportants);

                cardDatas = importants.concat(notImportants);
            }

            function sortCards(cards) {
                if(config_cards_sort_by_name) {
                    return cards.sort((a, b) => a.name.localeCompare(b.name));
                } else {
                    return cards.sort((a, b) => a.pos < b.pos);
                }
            }

            async function getJson(url) {
                log("Get json from url '" + url + "'");
                let localUrl = url;
                if(localUrl.toString().includes("?")) {
                    localUrl += "&key=" + config_global_credentials_api_key + "&token=" + config_global_credentials_api_token;
                } else {
                    localUrl += "?key=" + config_global_credentials_api_key + "&token=" + config_global_credentials_api_token;
                }
                let json_data = await fetch(localUrl, {
                    headers: {
                        Accept: 'application/json'
                    }
                    })
                    .then(resp => resp.json())
                    .then(json => {
                        log("Json result raw:");
                        if(config_global_debug) console.log(json);
                        log("Json result processed:");
                        if(config_global_debug) console.log(JSON.parse(JSON.stringify(json)));
                        return JSON.parse(JSON.stringify(json));
                    });
                return json_data;
            }

            function printHeader() {
                if(!config_global_show_header) {
                    return;
                }
                const cardHeaderDivH = document.createElement('h1');
                cardHeaderDivH.classList.add("card-header");
                cardHeaderDivH.style.paddingTop = "0.8em";
                cardHeaderDivH.innerText = cardDatas.length;

                if(config_cards_limit_count < cardDatas.length && config_global_show_header_sub_total) {
                    cardHeaderDivH.innerText = config_cards_limit_count + "/" + cardDatas.length;
                }

                cardHeaderDivH.innerText += " cards";
                cardHeaderDiv.innerHTML = cardHeaderDivH.outerHTML;
                content.innerHTML = cardHeaderDiv.outerHTML;
            }

            function printDoneCounts() {
                if(!config_done_show) {
                    return;
                }

                const doneDivWrapperDiv = document.createElement('div');
                doneDivWrapperDiv.style.paddingLeft = "0.4em";
                doneDivWrapperDiv.style.paddingBottom = "0.4em";
                doneDivWrapperDiv.style.fontSize = "1.2em";

                let text = "Done: ";

                if(config_done_show_last_seven_days) {
                    text += doneData.lastSevenDaysCount + " W ";
                }

                if(config_done_show_last_seven_days && config_done_show_total) {
                    text += " / ";
                }

                if(config_done_show_total) {
                    text += doneData.totalCount + " T";
                }

                doneDivWrapperDiv.innerText = text;
                doneDiv.innerHTML = doneDivWrapperDiv.outerHTML;
                content.innerHTML += doneDiv.outerHTML;
            }

            function printCards() {
                log(cardDatas);
                cardsDiv.innerHTML = "";
                for (let i = 0; i < cardDatas.length && i < config_cards_limit_count; i++) {
                    printCard(cardDatas[i]);
                }
                content.innerHTML += cardsDiv.outerHTML;
            }

            function printCard(cardData) {
                const cardContainerDiv = document.createElement("div");
                cardContainerDiv.style.marginBottom = "0.4em";
                // cardContainerDiv.style.border = "solid 1px";
                // cardContainerDiv.style.borderRadius = "12px";
                // cardContainerDiv.style.borderTop = "1px solid " + getColorFromTemplate("--fc-theme-standard-border-color"); // 1px solid var(--fc-theme-standard-border-color,#ddd) !important
                cardContainerDiv.style.padding = "0.5em";
                //cardContainerDiv.setAttribute("onClick", "cardClick('" + cardData.id + "')");

                // Label
                if(config_cards_show_labels) {
                    const cardLabelDiv = document.createElement("div");
                    cardLabelDiv.style.fontSize = "0.6em";
                    for (let i = 0; i < cardData.labels.length; i++) {
                        const cardLabelInnerSpan = document.createElement("span");

                        let labelText = "&nbsp&nbsp&nbsp&nbsp";
                        if(config_cards_show_label_text) {
                            labelText = "&nbsp&nbsp" + cardData.labels[i].name + "&nbsp&nbsp";
                        }

                        cardLabelInnerSpan.innerHTML = labelText;
                        cardLabelInnerSpan.style.backgroundColor = cardData.labels[i].color;
                        cardLabelDiv.innerHTML += cardLabelInnerSpan.outerHTML + "&nbsp&nbsp";
                    }
                    cardContainerDiv.innerHTML += cardLabelDiv.outerHTML;
                }

                // Name
                const cardNameWrapperDiv = document.createElement("div");
                //cardNameWrapperDiv.style.fontWeight = "bold";
//                cardNameWrapperDiv.style.fontSize = "1.2em";
                if(config_cards_show_is_important && cardData.isImportant) {
                    const cardNameImportantSpan = document.createElement("span");
                    cardNameImportantSpan.innerHTML = "✭&nbsp;";
                    cardNameImportantSpan.style.color = getColorFromTemplate("--primary-color");
                    cardNameImportantSpan.style.marginRight = "0.3em";
                    cardNameWrapperDiv.innerHTML = cardNameImportantSpan.outerHTML;
                }
                const cardNameTextSpan = document.createElement("span");
                cardNameTextSpan.innerText = cardData.name;
                cardNameWrapperDiv.innerHTML += cardNameTextSpan.outerHTML;
                cardContainerDiv.innerHTML += cardNameWrapperDiv.outerHTML;

                // Due "2023-11-30T20:29:00.000Z"
                if(config_cards_show_due && cardData.due != null && !cardData.dueComplete) {
                    const cardDueDiv = document.createElement("div");
                    cardDueDiv.innerText = cardData.due;
                    cardContainerDiv.innerHTML += cardDueDiv.outerHTML;
                }

                if(config_cards_show_desc) {
                    const cardDescDiv = document.createElement("div");
                    cardDescDiv.innerText = cardData.desc;
                    cardContainerDiv.innerHTML += cardDescDiv.outerHTML;
                }

                cardsDiv.innerHTML += cardContainerDiv.outerHTML;
            }

            function dimColor(foregroundColor, backgroundColor, visibilityPercentage) {
                return "color-mix(in srgb, " + foregroundColor + " " + visibilityPercentage + ", " + backgroundColor + ")";
            }

            function dimTextAsSpan(str, visibilityPercentage) {
                const dimTextSpan = document.createElement("span");
                const foregroundColor = getColorFromTemplate("--primary-text-color");
                const backgroundColor = getColorFromTemplate("--primary-background-color");
                dimTextSpan.innerHTML = str;
                dimTextSpan.style.color = dimColor(foregroundColor, backgroundColor, visibilityPercentage);
                return dimTextSpan.outerHTML;
            }
            
            function getColorFromTemplate(varName) {
                return getComputedStyle(document.documentElement).getPropertyValue(varName);
            }

            function log(str) {
                if(config_global_debug) console.log("TrelloListViewerCard: " + str);
            }

            function printLoading() {
                const loadingDiv = document.createElement("div");
                loadingDiv.innerHTML = "Loading trello cards...";
                loadingDiv.style.padding = "1em";
                content.innerHTML = loadingDiv.outerHTML;
            }

            async function init() {
                log("Loading cards...");
                printLoading();
                main();
                if(!config_global_disable_auto_refresh) {
                    setInterval(async () => {
                        log("Reloading cards...");
                        await main() 
                    }, config_global_update_interval_s);
                }
            }

            init();
        }
    }

    setConfig(config) {
        this.config = config;
    }

    getCardSize() {
        return 1;
    }
}

customElements.define('trello-list-viewer-card', TrelloListViewerCard);

class TrelloData {
    userId;
    userName;

    boardId;
    boardName;

    listId;
    listName;

    doneListId;
    doneListName;

    importantLabelId;
    importantLabelName;
    importantLabelColor;
}

class CardData {
    id;
    name;
    desc;
    isImportant;

    due;
    dueComplete;
    labels;
    shortUrl;
    dateLastActivity;
    pos;
}

class DoneData {
    totalCount;
    lastSevenDaysCount;
}

/*
# CONFIG

GLOBAL
global_credentials_api_key
global_credentials_api_token
global_board_name
global_list_name
global_important_label_name
global_debug
global_show_header
global_update_interval_s
global_disable_auto_refresh


*/

