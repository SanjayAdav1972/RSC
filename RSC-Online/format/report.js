$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("D:\\Projects\\RSC\\RSC-Online\\src\\uk\\co\\rsonline\\RSCOnline.feature");
formatter.feature({
  "line": 1,
  "name": "RS Online End 2 End testing",
  "description": "",
  "id": "rs-online-end-2-end-testing",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 5,
  "name": "01. E2E test_Home to Check out for battery charger",
  "description": "",
  "id": "rs-online-end-2-end-testing;01.-e2e-test-home-to-check-out-for-battery-charger",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I login into RS online website home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I ensure my basket is empty",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I search battery chargers in All Products and added 1 item",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify 1 item get added in basket",
  "keyword": "Then "
});
formatter.match({
  "location": "RSCOnlineSteps.I_login_into_RS_online_website_home_page()"
});
formatter.result({
  "duration": 8612483095,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_ensure_my_basket_is_empty()"
});
formatter.result({
  "duration": 13138114616,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_search_battery_chargers_in_All_Products_and_added_1_item()"
});
formatter.result({
  "duration": 4135189456,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_verify_1_item_get_added_in_basket()"
});
formatter.result({
  "duration": 1399611186,
  "status": "passed"
});
});