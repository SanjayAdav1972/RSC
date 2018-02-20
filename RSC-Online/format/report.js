$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RSCOnline.feature");
formatter.feature({
  "line": 1,
  "name": "RS Online End 2 End testing",
  "description": "",
  "id": "rs-online-end-2-end-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 168931124,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "01. E2E test_Home to Check out for battery charger",
  "description": "",
  "id": "rs-online-end-2-end-testing;01.-e2e-test-home-to-check-out-for-battery-charger",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I login into RS online website home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ensure my basket is empty",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I search battery chargers in All Products and added 1 item",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I verify 1 item get added in basket",
  "keyword": "Then "
});
formatter.match({
  "location": "RSCOnlineSteps.I_login_into_RS_online_website_home_page()"
});
formatter.result({
  "duration": 9659505410,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_ensure_my_basket_is_empty()"
});
formatter.result({
  "duration": 14762737877,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_search_battery_chargers_in_All_Products_and_added_1_item()"
});
formatter.result({
  "duration": 4116229956,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_verify_1_item_get_added_in_basket()"
});
formatter.result({
  "duration": 60346430,
  "status": "passed"
});
formatter.after({
  "duration": 1033624542,
  "status": "passed"
});
});