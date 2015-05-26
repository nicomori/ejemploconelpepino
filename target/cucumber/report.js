$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/example/cucumber1/testgoogle.feature");
formatter.feature({
  "id": "testing-example-with-cucumber-version:-0.0.1",
  "description": "",
  "name": "Testing example with cucumber Version: 0.0.1",
  "keyword": "Feature",
  "line": 1
});
formatter.scenarioOutline({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 3,
  "type": "scenario_outline"
});
formatter.step({
  "name": "\"\u003curl\u003e\" is open in \"\u003cbrowser\u003e\" and set the emulation to device \"\u003cdevice\u003e\"",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I type \"\u003cstring to search\u003e\" in the search field",
  "keyword": "When ",
  "line": 6
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.examples({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;",
  "description": "",
  "name": "",
  "keyword": "Examples",
  "line": 10,
  "rows": [
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;1",
      "cells": [
        "url",
        "browser",
        "string to search",
        "device"
      ],
      "line": 12
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;2",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "java",
        "Google Nexus 5"
      ],
      "line": 13
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;3",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "kiwi",
        "Apple iPhone 5"
      ],
      "line": 14
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;4",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "compu",
        "Apple iPhone 6"
      ],
      "line": 15
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;5",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "compu",
        ""
      ],
      "line": 16
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;6",
      "cells": [
        "https://www.google.com.ar/",
        "firefox",
        "compu",
        ""
      ],
      "line": 17
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;7",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "kiwi",
        "Apple iPhone 6 Plus"
      ],
      "line": 18
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;8",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "kiwi",
        "Google Nexus 10"
      ],
      "line": 19
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;9",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "kiwi",
        "Google Nexus 4"
      ],
      "line": 20
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;10",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "compu",
        "Google Nexus 5"
      ],
      "line": 21
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;11",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "kiwi",
        "Google Nexus 7"
      ],
      "line": 22
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;12",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "compu",
        "Samsung Galaxy Note 3"
      ],
      "line": 23
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;13",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "compu",
        "Samsung Galaxy Note II"
      ],
      "line": 24
    },
    {
      "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;14",
      "cells": [
        "https://www.google.com.ar/",
        "chrome",
        "compu",
        "Samsung Galaxy S4"
      ],
      "line": 25
    }
  ]
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;2",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 13,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Google Nexus 5\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"java\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Google Nexus 5",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6928153904,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "java",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 134897290,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 716401398,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 65707235,
  "status": "passed"
});
formatter.after({
  "duration": 1317638201,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;3",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 14,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Apple iPhone 5\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"kiwi\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Apple iPhone 5",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6320567645,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiwi",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 150354871,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 1197734197,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 57560950,
  "status": "passed"
});
formatter.after({
  "duration": 1309097000,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;4",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 15,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Apple iPhone 6\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"compu\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Apple iPhone 6",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6445984063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compu",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 146406936,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 1319178458,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 103335157,
  "status": "passed"
});
formatter.after({
  "duration": 1314433301,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;5",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 16,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"compu\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6558842377,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compu",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 133125092,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 74123641,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 60432511,
  "status": "passed"
});
formatter.after({
  "duration": 1312323247,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;6",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 17,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"firefox\" and set the emulation to device \"\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"compu\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "firefox",
      "offset": 41
    },
    {
      "val": "",
      "offset": 83
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 14251872262,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compu",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 584484455,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 202781083,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 156118930,
  "status": "passed"
});
formatter.after({
  "duration": 43385002,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;7",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 18,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Apple iPhone 6 Plus\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"kiwi\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Apple iPhone 6 Plus",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6429605695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiwi",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 123867950,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 1181975708,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 49048485,
  "status": "passed"
});
formatter.after({
  "duration": 1320226507,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;8",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 19,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Google Nexus 10\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"kiwi\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Google Nexus 10",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6383821636,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiwi",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 133200628,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 71731561,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 47089090,
  "status": "passed"
});
formatter.after({
  "duration": 1308464805,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;9",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 20,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Google Nexus 4\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"kiwi\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Google Nexus 4",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6274996644,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiwi",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 133293404,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 770564915,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 54929951,
  "status": "passed"
});
formatter.after({
  "duration": 1309273521,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;10",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 21,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Google Nexus 5\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"compu\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Google Nexus 5",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6207782403,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compu",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 128382397,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 2189710656,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 53191005,
  "status": "passed"
});
formatter.after({
  "duration": 1313903735,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;11",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 22,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Google Nexus 7\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"kiwi\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Google Nexus 7",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6463021720,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiwi",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 130722751,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 73822321,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 44589457,
  "status": "passed"
});
formatter.after({
  "duration": 1309724269,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;12",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 23,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Samsung Galaxy Note 3\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"compu\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Samsung Galaxy Note 3",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6397018092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compu",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 135853793,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 2064613209,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 53369169,
  "status": "passed"
});
formatter.after({
  "duration": 1338271160,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;13",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 24,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Samsung Galaxy Note II\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"compu\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Samsung Galaxy Note II",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6749362981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compu",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 145089179,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 2117356341,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 57535498,
  "status": "passed"
});
formatter.after({
  "duration": 1328283299,
  "status": "passed"
});
formatter.scenario({
  "id": "testing-example-with-cucumber-version:-0.0.1;search-something-in-google-and-check-if-the-result-it\u0027s-ok.;;14",
  "description": "",
  "name": "Search something in google and check if the result it\u0027s ok.",
  "keyword": "Scenario Outline",
  "line": 25,
  "type": "scenario"
});
formatter.step({
  "name": "\"https://www.google.com.ar/\" is open in \"chrome\" and set the emulation to device \"Samsung Galaxy S4\"",
  "keyword": "Given ",
  "line": 5,
  "matchedColumns": [
    0,
    1,
    3
  ]
});
formatter.step({
  "name": "I type \"compu\" in the search field",
  "keyword": "When ",
  "line": 6,
  "matchedColumns": [
    2
  ]
});
formatter.step({
  "name": "I click the search button",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "I see the results for Java",
  "keyword": "Then ",
  "line": 8
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.com.ar/",
      "offset": 1
    },
    {
      "val": "chrome",
      "offset": 41
    },
    {
      "val": "Samsung Galaxy S4",
      "offset": 82
    }
  ],
  "location": "googletest.openbrowser(String,String,String)"
});
formatter.result({
  "duration": 6565079351,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compu",
      "offset": 8
    }
  ],
  "location": "googletest.enterValue(String)"
});
formatter.result({
  "duration": 131967436,
  "status": "passed"
});
formatter.match({
  "location": "googletest.googleSearch()"
});
formatter.result({
  "duration": 2007516143,
  "status": "passed"
});
formatter.match({
  "location": "googletest.checkJavaDowlnoad()"
});
formatter.result({
  "duration": 82911973,
  "status": "passed"
});
formatter.after({
  "duration": 1302888352,
  "status": "passed"
});
});