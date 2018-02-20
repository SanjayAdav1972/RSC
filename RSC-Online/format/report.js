$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("RSCOnline.feature");
formatter.feature({
  "line": 1,
  "name": "RS Online End 2 End testing",
  "description": "",
  "id": "rs-online-end-2-end-testing",
  "keyword": "Feature"
});
formatter.before({
  "duration": 116776952,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "RS Component website is up and running",
  "description": "\t\t\tList of Scenarios covered:\n\t\t\t01. E2E test_Home to Check out for battery charger from All Products\n\t02. E2E test_Home to check out ABB product from Our Brands",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 8,
  "name": "01. E2E test_Home to Check out for battery charger from All Products",
  "description": "",
  "id": "rs-online-end-2-end-testing;01.-e2e-test-home-to-check-out-for-battery-charger-from-all-products",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I login into RS online website home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I ensure my basket is empty",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I search \u0027battery chargers in All Products\u0027 and added 1 item",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I verify 1 item get added in basket",
  "keyword": "Then "
});
formatter.match({
  "location": "RSCOnlineSteps.I_login_into_RS_online_website_home_page()"
});
formatter.result({
  "duration": 9230540596,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_ensure_my_basket_is_empty()"
});
formatter.result({
  "duration": 33207940494,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "battery chargers in All Products",
      "offset": 10
    }
  ],
  "location": "RSCOnlineSteps.I_search_Products_and_added_1_item(String)"
});
formatter.result({
  "duration": 4505140311,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_verify_1_item_get_added_in_basket()"
});
formatter.result({
  "duration": 389390939,
  "status": "passed"
});
formatter.after({
  "duration": 1156375580,
  "status": "passed"
});
formatter.before({
  "duration": 505941,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "RS Component website is up and running",
  "description": "\t\t\tList of Scenarios covered:\n\t\t\t01. E2E test_Home to Check out for battery charger from All Products\n\t02. E2E test_Home to check out ABB product from Our Brands",
  "type": "background",
  "keyword": "Background"
});
formatter.scenario({
  "line": 14,
  "name": "02. E2E test_Home to check out ABB product from Our Brands",
  "description": "",
  "id": "rs-online-end-2-end-testing;02.-e2e-test-home-to-check-out-abb-product-from-our-brands",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I login into RS online website home page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I ensure my basket is empty",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I search \u0027ABB product in Our Brands\u0027 and added 1 item",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I verify 1 item get added in basket",
  "keyword": "Then "
});
formatter.match({
  "location": "RSCOnlineSteps.I_login_into_RS_online_website_home_page()"
});
formatter.result({
  "duration": 6979264272,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_ensure_my_basket_is_empty()"
});
formatter.result({
  "duration": 33479663954,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABB product in Our Brands",
      "offset": 10
    }
  ],
  "location": "RSCOnlineSteps.I_search_Products_and_added_1_item(String)"
});
formatter.result({
  "duration": 5029613239,
  "status": "passed"
});
formatter.match({
  "location": "RSCOnlineSteps.I_verify_1_item_get_added_in_basket()"
});
formatter.result({
  "duration": 379825154,
  "status": "passed"
});
formatter.after({
  "duration": 960532989,
  "status": "passed"
});
});