//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
//                                                                      //
// If you are using Chrome, open the Developer Tools and click the gear //
// icon in its lower right corner. In the General Settings panel, turn  //
// on 'Enable source maps'.                                             //
//                                                                      //
// If you are using Firefox 23, go to `about:config` and set the        //
// `devtools.debugger.source-maps-enabled` preference to true.          //
// (The preference should be on by default in Firefox 24; versions      //
// older than 23 do not support source maps.)                           //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var Session = Package.session.Session;
var Accounts = Package['accounts-base'].Accounts;
var _ = Package.underscore._;
var Template = Package.templating.Template;
var UI = Package.ui.UI;
var Handlebars = Package.ui.Handlebars;
var HTML = Package.htmljs.HTML;

/* Package-scope variables */
var $modal;

(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/accounts_ui.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
if (!Accounts.ui)                                                                                                      // 1
    Accounts.ui = {};                                                                                                  // 2
                                                                                                                       // 3
if (!Accounts.ui._options) {                                                                                           // 4
    Accounts.ui._options = {                                                                                           // 5
        requestPermissions: {},                                                                                        // 6
        extraSignupFields: []                                                                                          // 7
    };                                                                                                                 // 8
}                                                                                                                      // 9
                                                                                                                       // 10
Accounts.ui.navigate = function (route, hash) {                                                                        // 11
    // if router is iron-router                                                                                        // 12
    if(window.Router && _.isFunction(Router.go)) {                                                                     // 13
        Router.go(route, hash);                                                                                        // 14
    }                                                                                                                  // 15
}                                                                                                                      // 16
                                                                                                                       // 17
Accounts.ui.config = function(options) {                                                                               // 18
    // validate options keys                                                                                           // 19
    var VALID_KEYS = ['passwordSignupFields', 'requestPermissions', 'extraSignupFields'];                              // 20
    _.each(_.keys(options), function(key) {                                                                            // 21
        if (!_.contains(VALID_KEYS, key))                                                                              // 22
            throw new Error("Accounts.ui.config: Invalid key: " + key);                                                // 23
    });                                                                                                                // 24
                                                                                                                       // 25
    // deal with `passwordSignupFields`                                                                                // 26
    if (options.passwordSignupFields) {                                                                                // 27
        if (_.contains([                                                                                               // 28
            "USERNAME_AND_EMAIL_CONFIRM",                                                                              // 29
            "USERNAME_AND_EMAIL",                                                                                      // 30
            "USERNAME_AND_OPTIONAL_EMAIL",                                                                             // 31
            "USERNAME_ONLY",                                                                                           // 32
            "EMAIL_ONLY"                                                                                               // 33
        ], options.passwordSignupFields)) {                                                                            // 34
            if (Accounts.ui._options.passwordSignupFields)                                                             // 35
                throw new Error("Accounts.ui.config: Can't set `passwordSignupFields` more than once");                // 36
            else                                                                                                       // 37
                Accounts.ui._options.passwordSignupFields = options.passwordSignupFields;                              // 38
        } else {                                                                                                       // 39
            throw new Error("Accounts.ui.config: Invalid option for `passwordSignupFields`: " + options.passwordSignupFields);
        }                                                                                                              // 41
    }                                                                                                                  // 42
                                                                                                                       // 43
    // deal with `requestPermissions`                                                                                  // 44
    if (options.requestPermissions) {                                                                                  // 45
        _.each(options.requestPermissions, function(scope, service) {                                                  // 46
            if (Accounts.ui._options.requestPermissions[service]) {                                                    // 47
                throw new Error("Accounts.ui.config: Can't set `requestPermissions` more than once for " + service);   // 48
            } else if (!(scope instanceof Array)) {                                                                    // 49
                throw new Error("Accounts.ui.config: Value for `requestPermissions` must be an array");                // 50
            } else {                                                                                                   // 51
                Accounts.ui._options.requestPermissions[service] = scope;                                              // 52
            }                                                                                                          // 53
        });                                                                                                            // 54
        if (typeof options.extraSignupFields !== 'object' || !options.extraSignupFields instanceof Array) {            // 55
            throw new Error("Accounts.ui.config: `extraSignupFields` must be an array.");                              // 56
        } else {                                                                                                       // 57
            if (options.extraSignupFields) {                                                                           // 58
                _.each(options.extraSignupFields, function(field, index) {                                             // 59
                    if (!field.fieldName || !field.fieldLabel)                                                         // 60
                        throw new Error("Accounts.ui.config: `extraSignupFields` objects must have `fieldName` and `fieldLabel` attributes.");
                    if (typeof field.visible === 'undefined')                                                          // 62
                        field.visible = true;                                                                          // 63
                    Accounts.ui._options.extraSignupFields[index] = field;                                             // 64
                });                                                                                                    // 65
            }                                                                                                          // 66
        }                                                                                                              // 67
    }                                                                                                                  // 68
};                                                                                                                     // 69
                                                                                                                       // 70
Accounts.ui._passwordSignupFields = function() {                                                                       // 71
    return Accounts.ui._options.passwordSignupFields || "EMAIL_ONLY";                                                  // 72
};                                                                                                                     // 73
                                                                                                                       // 74
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("_loginButtons", (function() {                                                                     // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return [ HTML.DIV({                                                                                                  // 5
    id: "login-buttons",                                                                                               // 6
    "class": [ "login-buttons-dropdown-align-", function() {                                                           // 7
      return Spacebars.mustache(self.lookup("align"));                                                                 // 8
    } ]                                                                                                                // 9
  }), "\n  ", UI.If(function() {                                                                                       // 10
    return Spacebars.call(self.lookup("currentUser"));                                                                 // 11
  }, UI.block(function() {                                                                                             // 12
    var self = this;                                                                                                   // 13
    return [ "\n    ", UI.If(function() {                                                                              // 14
      return Spacebars.call(self.lookup("loggingIn"));                                                                 // 15
    }, UI.block(function() {                                                                                           // 16
      var self = this;                                                                                                 // 17
      return [ "\n      \n      ", UI.If(function() {                                                                  // 18
        return Spacebars.call(self.lookup("dropdown"));                                                                // 19
      }, UI.block(function() {                                                                                         // 20
        var self = this;                                                                                               // 21
        return [ "\n        ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggingIn")), "\n      " ];         // 22
      }), UI.block(function() {                                                                                        // 23
        var self = this;                                                                                               // 24
        return [ "\n        ", HTML.DIV({                                                                              // 25
          "class": "login-buttons-with-only-one-button"                                                                // 26
        }, "\n          ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggingInSingleLoginButton")), "\n        "), "\n      " ];
      })), "\n    " ];                                                                                                 // 28
    }), UI.block(function() {                                                                                          // 29
      var self = this;                                                                                                 // 30
      return [ "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedIn")), "\n    " ];                // 31
    })), "\n  " ];                                                                                                     // 32
  }), UI.block(function() {                                                                                            // 33
    var self = this;                                                                                                   // 34
    return [ "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedOut")), "\n  " ];                     // 35
  })) ];                                                                                                               // 36
}));                                                                                                                   // 37
                                                                                                                       // 38
Template.__define__("_loginButtonsLoggedIn", (function() {                                                             // 39
  var self = this;                                                                                                     // 40
  var template = this;                                                                                                 // 41
  return UI.If(function() {                                                                                            // 42
    return Spacebars.call(self.lookup("dropdown"));                                                                    // 43
  }, UI.block(function() {                                                                                             // 44
    var self = this;                                                                                                   // 45
    return [ "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedInDropdown")), "\n  " ];              // 46
  }), UI.block(function() {                                                                                            // 47
    var self = this;                                                                                                   // 48
    return [ "\n    ", HTML.DIV({                                                                                      // 49
      "class": "login-buttons-with-only-one-button"                                                                    // 50
    }, "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedInSingleLogoutButton")), "\n    "), "\n  " ];
  }));                                                                                                                 // 52
}));                                                                                                                   // 53
                                                                                                                       // 54
Template.__define__("_loginButtonsLoggedOut", (function() {                                                            // 55
  var self = this;                                                                                                     // 56
  var template = this;                                                                                                 // 57
  return UI.If(function() {                                                                                            // 58
    return Spacebars.call(self.lookup("services"));                                                                    // 59
  }, UI.block(function() {                                                                                             // 60
    var self = this;                                                                                                   // 61
    return [ " \n    ", UI.If(function() {                                                                             // 62
      return Spacebars.call(self.lookup("configurationLoaded"));                                                       // 63
    }, UI.block(function() {                                                                                           // 64
      var self = this;                                                                                                 // 65
      return [ "\n      ", UI.If(function() {                                                                          // 66
        return Spacebars.call(self.lookup("dropdown"));                                                                // 67
      }, UI.block(function() {                                                                                         // 68
        var self = this;                                                                                               // 69
        return [ " \n        ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedOutDropdown")), "\n      " ];
      }), UI.block(function() {                                                                                        // 71
        var self = this;                                                                                               // 72
        return [ "\n        ", Spacebars.With(function() {                                                             // 73
          return Spacebars.call(self.lookup("singleService"));                                                         // 74
        }, UI.block(function() {                                                                                       // 75
          var self = this;                                                                                             // 76
          return [ " \n          ", HTML.DIV({                                                                         // 77
            "class": "login-buttons-with-only-one-button"                                                              // 78
          }, "\n            ", UI.If(function() {                                                                      // 79
            return Spacebars.call(self.lookup("loggingIn"));                                                           // 80
          }, UI.block(function() {                                                                                     // 81
            var self = this;                                                                                           // 82
            return [ "\n              ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggingInSingleLoginButton")), "\n            " ];
          }), UI.block(function() {                                                                                    // 84
            var self = this;                                                                                           // 85
            return [ "\n              ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n            " ];
          })), "\n          "), "\n        " ];                                                                        // 87
        })), "\n      " ];                                                                                             // 88
      })), "\n    " ];                                                                                                 // 89
    })), "\n  " ];                                                                                                     // 90
  }), UI.block(function() {                                                                                            // 91
    var self = this;                                                                                                   // 92
    return [ "\n    ", HTML.DIV({                                                                                      // 93
      "class": "no-services"                                                                                           // 94
    }, "No login services configured"), "\n  " ];                                                                      // 95
  }));                                                                                                                 // 96
}));                                                                                                                   // 97
                                                                                                                       // 98
Template.__define__("_loginButtonsMessages", (function() {                                                             // 99
  var self = this;                                                                                                     // 100
  var template = this;                                                                                                 // 101
  return [ UI.If(function() {                                                                                          // 102
    return Spacebars.call(self.lookup("errorMessage"));                                                                // 103
  }, UI.block(function() {                                                                                             // 104
    var self = this;                                                                                                   // 105
    return [ "\n    ", HTML.DIV({                                                                                      // 106
      "class": "alert alert-danger"                                                                                    // 107
    }, function() {                                                                                                    // 108
      return Spacebars.mustache(self.lookup("errorMessage"));                                                          // 109
    }), "\n  " ];                                                                                                      // 110
  })), "\n  ", UI.If(function() {                                                                                      // 111
    return Spacebars.call(self.lookup("infoMessage"));                                                                 // 112
  }, UI.block(function() {                                                                                             // 113
    var self = this;                                                                                                   // 114
    return [ "\n    ", HTML.DIV({                                                                                      // 115
      "class": "alert alert-success no-margin"                                                                         // 116
    }, function() {                                                                                                    // 117
      return Spacebars.mustache(self.lookup("infoMessage"));                                                           // 118
    }), "\n  " ];                                                                                                      // 119
  })) ];                                                                                                               // 120
}));                                                                                                                   // 121
                                                                                                                       // 122
Template.__define__("_loginButtonsLoggingIn", (function() {                                                            // 123
  var self = this;                                                                                                     // 124
  var template = this;                                                                                                 // 125
  return [ Spacebars.include(self.lookupTemplate("_loginButtonsLoggingInPadding")), HTML.Raw('\n  <div class="loading">&nbsp;</div>\n  '), Spacebars.include(self.lookupTemplate("_loginButtonsLoggingInPadding")) ];
}));                                                                                                                   // 127
                                                                                                                       // 128
Template.__define__("_loginButtonsLoggingInPadding", (function() {                                                     // 129
  var self = this;                                                                                                     // 130
  var template = this;                                                                                                 // 131
  return UI.Unless(function() {                                                                                        // 132
    return Spacebars.call(self.lookup("dropdown"));                                                                    // 133
  }, UI.block(function() {                                                                                             // 134
    var self = this;                                                                                                   // 135
    return [ "\n    \n    ", HTML.DIV({                                                                                // 136
      "class": "login-buttons-padding"                                                                                 // 137
    }, "\n      ", HTML.DIV({                                                                                          // 138
      "class": "login-button single-login-button",                                                                     // 139
      style: "visibility: hidden;",                                                                                    // 140
      id: "login-buttons-logout"                                                                                       // 141
    }, HTML.CharRef({                                                                                                  // 142
      html: "&nbsp;",                                                                                                  // 143
      str: " "                                                                                                         // 144
    })), "\n    "), "\n  " ];                                                                                          // 145
  }), UI.block(function() {                                                                                            // 146
    var self = this;                                                                                                   // 147
    return [ "\n    \n    ", HTML.DIV({                                                                                // 148
      "class": "login-buttons-padding"                                                                                 // 149
    }), "\n  " ];                                                                                                      // 150
  }));                                                                                                                 // 151
}));                                                                                                                   // 152
                                                                                                                       // 153
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons_single.js                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("_loginButtonsLoggedOutSingleLoginButton", (function() {                                           // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return HTML.DIV({                                                                                                    // 5
    "class": "login-text-and-button"                                                                                   // 6
  }, "\n    ", HTML.DIV({                                                                                              // 7
    "class": [ "login-button single-login-button col-sm-12 ", UI.If(function() {                                       // 8
      return Spacebars.call(self.lookup("configured"));                                                                // 9
    }, UI.block(function() {                                                                                           // 10
      var self = this;                                                                                                 // 11
      return "btn btn-info ";                                                                                          // 12
    }), UI.block(function() {                                                                                          // 13
      var self = this;                                                                                                 // 14
      return "configure-button btn btn-danger";                                                                        // 15
    })) ],                                                                                                             // 16
    id: [ "login-buttons-", function() {                                                                               // 17
      return Spacebars.mustache(self.lookup("name"));                                                                  // 18
    } ]                                                                                                                // 19
  }, "\n      ", HTML.DIV({                                                                                            // 20
    "class": "login-image",                                                                                            // 21
    id: [ "login-buttons-image-", function() {                                                                         // 22
      return Spacebars.mustache(self.lookup("name"));                                                                  // 23
    } ]                                                                                                                // 24
  }), "\n      ", UI.If(function() {                                                                                   // 25
    return Spacebars.call(self.lookup("configured"));                                                                  // 26
  }, UI.block(function() {                                                                                             // 27
    var self = this;                                                                                                   // 28
    return [ "\n        ", HTML.SPAN({                                                                                 // 29
      "class": [ "text-besides-image sign-in-text-", function() {                                                      // 30
        return Spacebars.mustache(self.lookup("name"));                                                                // 31
      } ]                                                                                                              // 32
    }, "Sign in with ", function() {                                                                                   // 33
      return Spacebars.mustache(self.lookup("capitalizedName"));                                                       // 34
    }), "\n      " ];                                                                                                  // 35
  }), UI.block(function() {                                                                                            // 36
    var self = this;                                                                                                   // 37
    return [ "\n        ", HTML.SPAN({                                                                                 // 38
      "class": [ "text-besides-image configure-text-", function() {                                                    // 39
        return Spacebars.mustache(self.lookup("name"));                                                                // 40
      } ]                                                                                                              // 41
    }, "Configure ", function() {                                                                                      // 42
      return Spacebars.mustache(self.lookup("capitalizedName"));                                                       // 43
    }, " Login"), "\n      " ];                                                                                        // 44
  })), "\n    "), "\n  ");                                                                                             // 45
}));                                                                                                                   // 46
                                                                                                                       // 47
Template.__define__("_loginButtonsLoggingInSingleLoginButton", (function() {                                           // 48
  var self = this;                                                                                                     // 49
  var template = this;                                                                                                 // 50
  return HTML.DIV({                                                                                                    // 51
    "class": "login-text-and-button"                                                                                   // 52
  }, "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggingIn")), "\n  ");                              // 53
}));                                                                                                                   // 54
                                                                                                                       // 55
Template.__define__("_loginButtonsLoggedInSingleLogoutButton", (function() {                                           // 56
  var self = this;                                                                                                     // 57
  var template = this;                                                                                                 // 58
  return HTML.DIV({                                                                                                    // 59
    "class": "login-text-and-button"                                                                                   // 60
  }, "\n    ", HTML.DIV({                                                                                              // 61
    "class": "login-display-name"                                                                                      // 62
  }, "\n      ", function() {                                                                                          // 63
    return Spacebars.mustache(self.lookup("displayName"));                                                             // 64
  }, "\n    "), HTML.Raw('\n    <div class="login-button single-login-button" id="login-buttons-logout">Sign Out</div>\n  '));
}));                                                                                                                   // 66
                                                                                                                       // 67
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons_dropdown.js                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
Template.__define__("_loginButtonsLoggedInDropdown", (function() {                                                     // 2
  var self = this;                                                                                                     // 3
  var template = this;                                                                                                 // 4
  return HTML.LI({                                                                                                     // 5
    id: "login-dropdown-list",                                                                                         // 6
    "class": "dropdown"                                                                                                // 7
  }, "\n    ", HTML.A({                                                                                                // 8
    "class": "dropdown-toggle",                                                                                        // 9
    "data-toggle": "dropdown"                                                                                          // 10
  }, "\n      ", function() {                                                                                          // 11
    return Spacebars.mustache(self.lookup("displayName"));                                                             // 12
  }, HTML.Raw('\n      <b class="caret"></b>\n    ')), "\n    ", HTML.DIV({                                            // 13
    "class": "dropdown-menu col-sm-3"                                                                                  // 14
  }, "\n      ", UI.If(function() {                                                                                    // 15
    return Spacebars.call(self.lookup("inMessageOnlyFlow"));                                                           // 16
  }, UI.block(function() {                                                                                             // 17
    var self = this;                                                                                                   // 18
    return [ "\n        ", Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), "\n      " ];              // 19
  }), UI.block(function() {                                                                                            // 20
    var self = this;                                                                                                   // 21
    return [ "\n        ", UI.If(function() {                                                                          // 22
      return Spacebars.call(self.lookup("inChangePasswordFlow"));                                                      // 23
    }, UI.block(function() {                                                                                           // 24
      var self = this;                                                                                                 // 25
      return [ "\n          ", Spacebars.include(self.lookupTemplate("_loginButtonsChangePassword")), "\n        " ];  // 26
    }), UI.block(function() {                                                                                          // 27
      var self = this;                                                                                                 // 28
      return [ "\n          ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedInDropdownActions")), "\n        " ];
    })), "\n      " ];                                                                                                 // 30
  })), "\n    "), "\n  ");                                                                                             // 31
}));                                                                                                                   // 32
                                                                                                                       // 33
Template.__define__("_loginButtonsLoggedInDropdownActions", (function() {                                              // 34
  var self = this;                                                                                                     // 35
  var template = this;                                                                                                 // 36
  return [ UI.If(function() {                                                                                          // 37
    return Spacebars.call(self.lookup("additionalLoggedInDropdownActions"));                                           // 38
  }, UI.block(function() {                                                                                             // 39
    var self = this;                                                                                                   // 40
    return [ "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsAdditionalLoggedInDropdownActions")), "\n  " ];
  })), "\n\n  ", UI.If(function() {                                                                                    // 42
    return Spacebars.call(self.lookup("allowChangingPassword"));                                                       // 43
  }, UI.block(function() {                                                                                             // 44
    var self = this;                                                                                                   // 45
    return [ "\n    ", HTML.BUTTON({                                                                                   // 46
      "class": "btn btn-default btn-block",                                                                            // 47
      id: "login-buttons-open-change-password"                                                                         // 48
    }, "Change password"), "\n  " ];                                                                                   // 49
  })), HTML.Raw('\n\n  <button class="btn btn-block btn-primary" id="login-buttons-logout">Sign out</button>') ];      // 50
}));                                                                                                                   // 51
                                                                                                                       // 52
Template.__define__("_loginButtonsLoggedOutDropdown", (function() {                                                    // 53
  var self = this;                                                                                                     // 54
  var template = this;                                                                                                 // 55
  return HTML.LI({                                                                                                     // 56
    id: "login-dropdown-list",                                                                                         // 57
    "class": "dropdown"                                                                                                // 58
  }, "\n    ", HTML.A({                                                                                                // 59
    "class": "dropdown-toggle",                                                                                        // 60
    "data-toggle": "dropdown"                                                                                          // 61
  }, "\n      Sign In", UI.Unless(function() {                                                                         // 62
    return Spacebars.call(self.lookup("forbidClientAccountCreation"));                                                 // 63
  }, UI.block(function() {                                                                                             // 64
    var self = this;                                                                                                   // 65
    return " / Up";                                                                                                    // 66
  })), HTML.Raw('\n      <b class="caret"></b>\n    ')), "\n    ", HTML.DIV({                                          // 67
    "class": "dropdown-menu"                                                                                           // 68
  }, "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedOutAllServices")), "\n    "), "\n  ");      // 69
}));                                                                                                                   // 70
                                                                                                                       // 71
Template.__define__("_loginButtonsLoggedOutAllServices", (function() {                                                 // 72
  var self = this;                                                                                                     // 73
  var template = this;                                                                                                 // 74
  return UI.Each(function() {                                                                                          // 75
    return Spacebars.call(self.lookup("services"));                                                                    // 76
  }, UI.block(function() {                                                                                             // 77
    var self = this;                                                                                                   // 78
    return [ "\n  ", UI.Unless(function() {                                                                            // 79
      return Spacebars.call(self.lookup("hasPasswordService"));                                                        // 80
    }, UI.block(function() {                                                                                           // 81
      var self = this;                                                                                                 // 82
      return [ "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), "\n  " ];                    // 83
    })), "\n    ", UI.If(function() {                                                                                  // 84
      return Spacebars.call(self.lookup("isPasswordService"));                                                         // 85
    }, UI.block(function() {                                                                                           // 86
      var self = this;                                                                                                 // 87
      return [ "\n      ", UI.If(function() {                                                                          // 88
        return Spacebars.call(self.lookup("hasOtherServices"));                                                        // 89
      }, UI.block(function() {                                                                                         // 90
        var self = this;                                                                                               // 91
        return [ " \n        ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedOutPasswordServiceSeparator")), "\n      " ];
      })), "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedOutPasswordService")), "\n    " ];    // 93
    }), UI.block(function() {                                                                                          // 94
      var self = this;                                                                                                 // 95
      return [ "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsLoggedOutSingleLoginButton")), "\n    " ];
    })), "\n  " ];                                                                                                     // 97
  }));                                                                                                                 // 98
}));                                                                                                                   // 99
                                                                                                                       // 100
Template.__define__("_loginButtonsLoggedOutPasswordServiceSeparator", (function() {                                    // 101
  var self = this;                                                                                                     // 102
  var template = this;                                                                                                 // 103
  return HTML.Raw('<div class="or">\n    <span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n    <span class="or-text">or</span>\n    <span class="hline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n  </div>');
}));                                                                                                                   // 105
                                                                                                                       // 106
Template.__define__("_loginButtonsLoggedOutPasswordService", (function() {                                             // 107
  var self = this;                                                                                                     // 108
  var template = this;                                                                                                 // 109
  return UI.If(function() {                                                                                            // 110
    return Spacebars.call(self.lookup("inForgotPasswordFlow"));                                                        // 111
  }, UI.block(function() {                                                                                             // 112
    var self = this;                                                                                                   // 113
    return [ "\n    ", Spacebars.include(self.lookupTemplate("_forgotPasswordForm")), "\n  " ];                        // 114
  }), UI.block(function() {                                                                                            // 115
    var self = this;                                                                                                   // 116
    return [ "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), "\n    ", UI.Each(function() { // 117
      return Spacebars.call(self.lookup("fields"));                                                                    // 118
    }, UI.block(function() {                                                                                           // 119
      var self = this;                                                                                                 // 120
      return [ "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsFormField")), "\n    " ];               // 121
    })), "\n    ", HTML.BUTTON({                                                                                       // 122
      "class": "btn btn-primary col-sm-12",                                                                            // 123
      id: "login-buttons-password",                                                                                    // 124
      type: "button"                                                                                                   // 125
    }, "\n      ", UI.If(function() {                                                                                  // 126
      return Spacebars.call(self.lookup("inSignupFlow"));                                                              // 127
    }, UI.block(function() {                                                                                           // 128
      var self = this;                                                                                                 // 129
      return "\n        Create\n      ";                                                                               // 130
    }), UI.block(function() {                                                                                          // 131
      var self = this;                                                                                                 // 132
      return "\n        Sign in\n      ";                                                                              // 133
    })), "\n    "), "\n    ", UI.If(function() {                                                                       // 134
      return Spacebars.call(self.lookup("inLoginFlow"));                                                               // 135
    }, UI.block(function() {                                                                                           // 136
      var self = this;                                                                                                 // 137
      return [ "\n      ", HTML.DIV({                                                                                  // 138
        id: "login-other-options"                                                                                      // 139
      }, "\n      ", UI.If(function() {                                                                                // 140
        return Spacebars.call(self.lookup("showForgotPasswordLink"));                                                  // 141
      }, UI.block(function() {                                                                                         // 142
        var self = this;                                                                                               // 143
        return [ "\n        ", HTML.A({                                                                                // 144
          id: "forgot-password-link",                                                                                  // 145
          "class": "pull-left"                                                                                         // 146
        }, "Forgot password?"), "\n      " ];                                                                          // 147
      })), "\n      ", UI.If(function() {                                                                              // 148
        return Spacebars.call(self.lookup("showCreateAccountLink"));                                                   // 149
      }, UI.block(function() {                                                                                         // 150
        var self = this;                                                                                               // 151
        return [ "\n        ", HTML.A({                                                                                // 152
          id: "signup-link",                                                                                           // 153
          "class": "pull-right"                                                                                        // 154
        }, "Create account"), "\n      " ];                                                                            // 155
      })), "\n      "), "\n    " ];                                                                                    // 156
    })), "\n    ", UI.If(function() {                                                                                  // 157
      return Spacebars.call(self.lookup("inSignupFlow"));                                                              // 158
    }, UI.block(function() {                                                                                           // 159
      var self = this;                                                                                                 // 160
      return [ "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsBackToLoginLink")), "\n    " ];         // 161
    })), "\n  " ];                                                                                                     // 162
  }));                                                                                                                 // 163
}));                                                                                                                   // 164
                                                                                                                       // 165
Template.__define__("_forgotPasswordForm", (function() {                                                               // 166
  var self = this;                                                                                                     // 167
  var template = this;                                                                                                 // 168
  return HTML.DIV({                                                                                                    // 169
    "class": "login-form"                                                                                              // 170
  }, "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), HTML.Raw('\n    <div id="forgot-password-email-label-and-input"> \n      <input id="forgot-password-email" type="email" placeholder="E-mail" class="form-control">\n    </div>\n    <button class="btn btn-primary login-button-form-submit col-sm-12" id="login-buttons-forgot-password">Reset password</button>\n    '), Spacebars.include(self.lookupTemplate("_loginButtonsBackToLoginLink")), "\n  ");
}));                                                                                                                   // 172
                                                                                                                       // 173
Template.__define__("_loginButtonsBackToLoginLink", (function() {                                                      // 174
  var self = this;                                                                                                     // 175
  var template = this;                                                                                                 // 176
  return HTML.Raw('<button id="back-to-login-link" class="btn btn-default col-sm-12">Cancel</button>');                // 177
}));                                                                                                                   // 178
                                                                                                                       // 179
Template.__define__("_loginButtonsFormField", (function() {                                                            // 180
  var self = this;                                                                                                     // 181
  var template = this;                                                                                                 // 182
  return UI.If(function() {                                                                                            // 183
    return Spacebars.call(self.lookup("visible"));                                                                     // 184
  }, UI.block(function() {                                                                                             // 185
    var self = this;                                                                                                   // 186
    return [ "\n    ", HTML.INPUT({                                                                                    // 187
      id: [ "login-", function() {                                                                                     // 188
        return Spacebars.mustache(self.lookup("fieldName"));                                                           // 189
      } ],                                                                                                             // 190
      type: function() {                                                                                               // 191
        return Spacebars.mustache(self.lookup("inputType"));                                                           // 192
      },                                                                                                               // 193
      placeholder: function() {                                                                                        // 194
        return Spacebars.mustache(self.lookup("fieldLabel"));                                                          // 195
      },                                                                                                               // 196
      "class": "form-control"                                                                                          // 197
    }), "\n  " ];                                                                                                      // 198
  }));                                                                                                                 // 199
}));                                                                                                                   // 200
                                                                                                                       // 201
Template.__define__("_loginButtonsChangePassword", (function() {                                                       // 202
  var self = this;                                                                                                     // 203
  var template = this;                                                                                                 // 204
  return [ Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), "\n  ", UI.Each(function() {               // 205
    return Spacebars.call(self.lookup("fields"));                                                                      // 206
  }, UI.block(function() {                                                                                             // 207
    var self = this;                                                                                                   // 208
    return [ "\n    ", Spacebars.include(self.lookupTemplate("_loginButtonsFormField")), "\n  " ];                     // 209
  })), HTML.Raw('\n  <button class="btn btn-primary" id="login-buttons-do-change-password">Change password</button>\n  <button class="btn btn-default login-close">Close</button>') ];
}));                                                                                                                   // 211
                                                                                                                       // 212
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/template.login_buttons_dialogs.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
                                                                                                                       // 1
UI.body.contentParts.push(UI.Component.extend({render: (function() {                                                   // 2
  var self = this;                                                                                                     // 3
  return [ Spacebars.include(self.lookupTemplate("_resetPasswordDialog")), "\n  ", Spacebars.include(self.lookupTemplate("_enrollAccountDialog")), "\n  ", Spacebars.include(self.lookupTemplate("_justVerifiedEmailDialog")), "\n  ", Spacebars.include(self.lookupTemplate("_configureLoginServiceDialog")), HTML.Raw("\n\n  <!-- if we're not showing a dropdown, we need some other place to show messages -->\n  "), Spacebars.include(self.lookupTemplate("_loginButtonsMessagesDialog")) ];
})}));                                                                                                                 // 5
Meteor.startup(function () { if (! UI.body.INSTANTIATED) { UI.body.INSTANTIATED = true; UI.DomRange.insert(UI.render(UI.body).dom, document.body); } });
                                                                                                                       // 7
Template.__define__("_resetPasswordDialog", (function() {                                                              // 8
  var self = this;                                                                                                     // 9
  var template = this;                                                                                                 // 10
  return UI.If(function() {                                                                                            // 11
    return Spacebars.call(self.lookup("inResetPasswordFlow"));                                                         // 12
  }, UI.block(function() {                                                                                             // 13
    var self = this;                                                                                                   // 14
    return [ "\n    ", HTML.DIV({                                                                                      // 15
      "class": "modal",                                                                                                // 16
      id: "login-buttons-reset-password-modal"                                                                         // 17
    }, "\n      ", HTML.DIV({                                                                                          // 18
      "class": "modal-dialog"                                                                                          // 19
    }, "\n        ", HTML.DIV({                                                                                        // 20
      "class": "modal-content"                                                                                         // 21
    }, "\n          ", HTML.DIV({                                                                                      // 22
      "class": "modal-header"                                                                                          // 23
    }, "\n            ", HTML.BUTTON({                                                                                 // 24
      type: "button",                                                                                                  // 25
      "class": "close",                                                                                                // 26
      "data-dismiss": "modal",                                                                                         // 27
      "aria-hidden": "true"                                                                                            // 28
    }, HTML.CharRef({                                                                                                  // 29
      html: "&times;",                                                                                                 // 30
      str: "×"                                                                                                         // 31
    })), "\n            ", HTML.H4({                                                                                   // 32
      "class": "modal-title"                                                                                           // 33
    }, "Reset your password"), "\n          "), "\n          ", HTML.DIV({                                             // 34
      "class": "modal-body"                                                                                            // 35
    }, "\n            ", HTML.INPUT({                                                                                  // 36
      id: "reset-password-new-password",                                                                               // 37
      "class": "form-control",                                                                                         // 38
      type: "password",                                                                                                // 39
      placeholder: "New Password"                                                                                      // 40
    }), "\n            ", Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), "\n          "), "\n          ", HTML.DIV({
      "class": "modal-footer"                                                                                          // 42
    }, "\n            ", HTML.A({                                                                                      // 43
      "class": "btn btn-default",                                                                                      // 44
      id: "login-buttons-cancel-reset-password"                                                                        // 45
    }, "Close"), "\n            ", HTML.BUTTON({                                                                       // 46
      "class": "btn btn-primary",                                                                                      // 47
      id: "login-buttons-reset-password-button"                                                                        // 48
    }, "\n              Set password\n            "), "\n          "), "\n        "), HTML.Comment(" /.modal-content "), "\n      "), HTML.Comment(" /.modal-dalog "), "\n    "), HTML.Comment(" /.modal "), "\n  " ];
  }));                                                                                                                 // 50
}));                                                                                                                   // 51
                                                                                                                       // 52
Template.__define__("_enrollAccountDialog", (function() {                                                              // 53
  var self = this;                                                                                                     // 54
  var template = this;                                                                                                 // 55
  return UI.If(function() {                                                                                            // 56
    return Spacebars.call(self.lookup("inEnrollAccountFlow"));                                                         // 57
  }, UI.block(function() {                                                                                             // 58
    var self = this;                                                                                                   // 59
    return [ "\n    ", HTML.DIV({                                                                                      // 60
      "class": "modal",                                                                                                // 61
      id: "login-buttons-enroll-account-modal"                                                                         // 62
    }, "\n      ", HTML.DIV({                                                                                          // 63
      "class": "modal-dialog"                                                                                          // 64
    }, "\n        ", HTML.DIV({                                                                                        // 65
      "class": "modal-content"                                                                                         // 66
    }, "\n          ", HTML.DIV({                                                                                      // 67
      "class": "modal-header"                                                                                          // 68
    }, "\n            ", HTML.BUTTON({                                                                                 // 69
      type: "button",                                                                                                  // 70
      "class": "close",                                                                                                // 71
      "data-dismiss": "modal",                                                                                         // 72
      "aria-hidden": "true"                                                                                            // 73
    }, HTML.CharRef({                                                                                                  // 74
      html: "&times;",                                                                                                 // 75
      str: "×"                                                                                                         // 76
    })), "\n            ", HTML.H4({                                                                                   // 77
      "class": "modal-title"                                                                                           // 78
    }, "Choose a password"), "\n          "), "\n          ", HTML.DIV({                                               // 79
      "class": "modal-body"                                                                                            // 80
    }, "\n            ", HTML.INPUT({                                                                                  // 81
      id: "enroll-account-password",                                                                                   // 82
      "class": "form-control",                                                                                         // 83
      type: "password",                                                                                                // 84
      placeholder: "New Password"                                                                                      // 85
    }), "\n            ", Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), "\n          "), "\n          ", HTML.DIV({
      "class": "modal-footer"                                                                                          // 87
    }, "\n            ", HTML.A({                                                                                      // 88
      "class": "btn btn-default",                                                                                      // 89
      id: "login-buttons-cancel-enroll-account-button"                                                                 // 90
    }, "Close"), "\n            ", HTML.BUTTON({                                                                       // 91
      "class": "btn btn-primary",                                                                                      // 92
      id: "login-buttons-enroll-account-button"                                                                        // 93
    }, "\n              Set password\n            "), "\n          "), "\n        "), HTML.Comment(" /.modal-content "), "\n      "), HTML.Comment(" /.modal-dalog "), "\n    "), HTML.Comment(" /.modal "), "\n  " ];
  }));                                                                                                                 // 95
}));                                                                                                                   // 96
                                                                                                                       // 97
Template.__define__("_justVerifiedEmailDialog", (function() {                                                          // 98
  var self = this;                                                                                                     // 99
  var template = this;                                                                                                 // 100
  return UI.If(function() {                                                                                            // 101
    return Spacebars.call(self.lookup("visible"));                                                                     // 102
  }, UI.block(function() {                                                                                             // 103
    var self = this;                                                                                                   // 104
    return [ "\n    ", HTML.DIV({                                                                                      // 105
      "class": "accounts-dialog accounts-centered-dialog"                                                              // 106
    }, "\n      Email verified\n      ", HTML.DIV({                                                                    // 107
      "class": "login-button",                                                                                         // 108
      id: "just-verified-dismiss-button"                                                                               // 109
    }, "Dismiss"), "\n    "), "\n  " ];                                                                                // 110
  }));                                                                                                                 // 111
}));                                                                                                                   // 112
                                                                                                                       // 113
Template.__define__("_configureLoginServiceDialog", (function() {                                                      // 114
  var self = this;                                                                                                     // 115
  var template = this;                                                                                                 // 116
  return UI.If(function() {                                                                                            // 117
    return Spacebars.call(self.lookup("visible"));                                                                     // 118
  }, UI.block(function() {                                                                                             // 119
    var self = this;                                                                                                   // 120
    return [ "\n  ", HTML.DIV({                                                                                        // 121
      "class": "modal-dialog",                                                                                         // 122
      id: "configure-login-service-dialog-modal"                                                                       // 123
    }, "\n      ", HTML.DIV({                                                                                          // 124
      "class": "modal-content"                                                                                         // 125
    }, "\n          ", HTML.DIV({                                                                                      // 126
      "class": "modal-header"                                                                                          // 127
    }, "\n              ", HTML.H4({                                                                                   // 128
      "class": "modal-title"                                                                                           // 129
    }, "Configure Service"), "\n          "), "\n          ", HTML.DIV({                                               // 130
      "class": "modal-body"                                                                                            // 131
    }, "\n            ", HTML.DIV({                                                                                    // 132
      id: "configure-login-service-dialog",                                                                            // 133
      "class": "accounts-dialog accounts-centered-dialog"                                                              // 134
    }, "\n              ", function() {                                                                                // 135
      return Spacebars.makeRaw(Spacebars.mustache(self.lookup("configurationSteps")));                                 // 136
    }, "\n              ", HTML.P("\n                Now, copy over some details.\n              "), "\n              ", HTML.P("\n                ", HTML.TABLE("\n                  ", HTML.COLGROUP("\n                    ", HTML.COL({
      span: "1",                                                                                                       // 138
      "class": "configuration_labels"                                                                                  // 139
    }), "\n                    ", HTML.COL({                                                                           // 140
      span: "1",                                                                                                       // 141
      "class": "configuration_inputs"                                                                                  // 142
    }), "\n                  "), "\n                  ", UI.Each(function() {                                          // 143
      return Spacebars.call(self.lookup("configurationFields"));                                                       // 144
    }, UI.block(function() {                                                                                           // 145
      var self = this;                                                                                                 // 146
      return [ "\n                    ", HTML.TR("\n                      ", HTML.TD("\n                        ", HTML.LABEL({
        "for": [ "configure-login-service-dialog-", function() {                                                       // 148
          return Spacebars.mustache(self.lookup("property"));                                                          // 149
        } ]                                                                                                            // 150
      }, function() {                                                                                                  // 151
        return Spacebars.mustache(self.lookup("label"));                                                               // 152
      }), "\n                      "), "\n                      ", HTML.TD("\n                        ", HTML.INPUT({  // 153
        id: [ "configure-login-service-dialog-", function() {                                                          // 154
          return Spacebars.mustache(self.lookup("property"));                                                          // 155
        } ],                                                                                                           // 156
        type: "text"                                                                                                   // 157
      }), "\n                      "), "\n                    "), "\n                  " ];                            // 158
    })), "\n                "), "\n              "), "\n            "), "\n          "), "\n          ", HTML.DIV({    // 159
      "class": "modal-footer new-section"                                                                              // 160
    }, "\n                ", HTML.DIV({                                                                                // 161
      "class": "login-button btn btn-danger configure-login-service-dismiss-button"                                    // 162
    }, "\n                  I'll do this later\n                "), "\n                ", Spacebars.include(self.lookupTemplate("isolate"), UI.block(function() {
      var self = this;                                                                                                 // 164
      return [ "\n                  ", HTML.DIV({                                                                      // 165
        "class": [ "login-button login-button-configure btn btn-success ", UI.If(function() {                          // 166
          return Spacebars.call(self.lookup("saveDisabled"));                                                          // 167
        }, UI.block(function() {                                                                                       // 168
          var self = this;                                                                                             // 169
          return "login-button-disabled";                                                                              // 170
        })) ],                                                                                                         // 171
        id: "configure-login-service-dialog-save-configuration"                                                        // 172
      }, "\n                    Save Configuration\n                  "), "\n                " ];                      // 173
    })), "\n              "), "\n      "), "\n  "), "\n  ", HTML.DIV({                                                 // 174
      "class": "modal-backdrop  in"                                                                                    // 175
    }), "\n  " ];                                                                                                      // 176
  }));                                                                                                                 // 177
}));                                                                                                                   // 178
                                                                                                                       // 179
Template.__define__("_loginButtonsMessagesDialog", (function() {                                                       // 180
  var self = this;                                                                                                     // 181
  var template = this;                                                                                                 // 182
  return UI.If(function() {                                                                                            // 183
    return Spacebars.call(self.lookup("visible"));                                                                     // 184
  }, UI.block(function() {                                                                                             // 185
    var self = this;                                                                                                   // 186
    return [ "\n    ", HTML.DIV({                                                                                      // 187
      "class": "accounts-dialog accounts-centered-dialog",                                                             // 188
      id: "login-buttons-message-dialog"                                                                               // 189
    }, "\n      ", Spacebars.include(self.lookupTemplate("_loginButtonsMessages")), "\n      ", HTML.DIV({             // 190
      "class": "login-button",                                                                                         // 191
      id: "messages-dialog-dismiss-button"                                                                             // 192
    }, "Dismiss"), "\n    "), "\n  " ];                                                                                // 193
  }));                                                                                                                 // 194
}));                                                                                                                   // 195
                                                                                                                       // 196
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_session.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
  var VALID_KEYS = [                                                                                                   // 2
    'dropdownVisible',                                                                                                 // 3
                                                                                                                       // 4
    // XXX consider replacing these with one key that has an enum for values.                                          // 5
    'inSignupFlow',                                                                                                    // 6
    'inForgotPasswordFlow',                                                                                            // 7
    'inChangePasswordFlow',                                                                                            // 8
    'inMessageOnlyFlow',                                                                                               // 9
                                                                                                                       // 10
    'errorMessage',                                                                                                    // 11
    'infoMessage',                                                                                                     // 12
                                                                                                                       // 13
    // dialogs with messages (info and error)                                                                          // 14
    'resetPasswordToken',                                                                                              // 15
    'enrollAccountToken',                                                                                              // 16
    'justVerifiedEmail',                                                                                               // 17
                                                                                                                       // 18
    'configureLoginServiceDialogVisible',                                                                              // 19
    'configureLoginServiceDialogServiceName',                                                                          // 20
    'configureLoginServiceDialogSaveDisabled'                                                                          // 21
  ];                                                                                                                   // 22
                                                                                                                       // 23
  var validateKey = function (key) {                                                                                   // 24
    if (!_.contains(VALID_KEYS, key))                                                                                  // 25
      throw new Error("Invalid key in loginButtonsSession: " + key);                                                   // 26
  };                                                                                                                   // 27
                                                                                                                       // 28
  var KEY_PREFIX = "Meteor.loginButtons.";                                                                             // 29
                                                                                                                       // 30
  // XXX we should have a better pattern for code private to a package like this one                                   // 31
  Accounts._loginButtonsSession = {                                                                                    // 32
    set: function(key, value) {                                                                                        // 33
      validateKey(key);                                                                                                // 34
      if (_.contains(['errorMessage', 'infoMessage'], key))                                                            // 35
        throw new Error("Don't set errorMessage or infoMessage directly. Instead, use errorMessage() or infoMessage().");
                                                                                                                       // 37
      this._set(key, value);                                                                                           // 38
    },                                                                                                                 // 39
                                                                                                                       // 40
    _set: function(key, value) {                                                                                       // 41
      Session.set(KEY_PREFIX + key, value);                                                                            // 42
    },                                                                                                                 // 43
                                                                                                                       // 44
    get: function(key) {                                                                                               // 45
      validateKey(key);                                                                                                // 46
      return Session.get(KEY_PREFIX + key);                                                                            // 47
    },                                                                                                                 // 48
                                                                                                                       // 49
    closeDropdown: function () {                                                                                       // 50
      this.set('inSignupFlow', false);                                                                                 // 51
      this.set('inForgotPasswordFlow', false);                                                                         // 52
      this.set('inChangePasswordFlow', false);                                                                         // 53
      this.set('inMessageOnlyFlow', false);                                                                            // 54
      this.set('dropdownVisible', false);                                                                              // 55
      this.resetMessages();                                                                                            // 56
    },                                                                                                                 // 57
                                                                                                                       // 58
    infoMessage: function(message) {                                                                                   // 59
      this._set("errorMessage", null);                                                                                 // 60
      this._set("infoMessage", message);                                                                               // 61
      this.ensureMessageVisible();                                                                                     // 62
    },                                                                                                                 // 63
                                                                                                                       // 64
    errorMessage: function(message) {                                                                                  // 65
      this._set("errorMessage", message);                                                                              // 66
      this._set("infoMessage", null);                                                                                  // 67
      this.ensureMessageVisible();                                                                                     // 68
    },                                                                                                                 // 69
                                                                                                                       // 70
    // is there a visible dialog that shows messages (info and error)                                                  // 71
    isMessageDialogVisible: function () {                                                                              // 72
      return this.get('resetPasswordToken') ||                                                                         // 73
        this.get('enrollAccountToken') ||                                                                              // 74
        this.get('justVerifiedEmail');                                                                                 // 75
    },                                                                                                                 // 76
                                                                                                                       // 77
    // ensure that somethings displaying a message (info or error) is                                                  // 78
    // visible.  if a dialog with messages is open, do nothing;                                                        // 79
    // otherwise open the dropdown.                                                                                    // 80
    //                                                                                                                 // 81
    // notably this doesn't matter when only displaying a single login                                                 // 82
    // button since then we have an explicit message dialog                                                            // 83
    // (_loginButtonsMessageDialog), and dropdownVisible is ignored in                                                 // 84
    // this case.                                                                                                      // 85
    ensureMessageVisible: function () {                                                                                // 86
      if (!this.isMessageDialogVisible())                                                                              // 87
        this.set("dropdownVisible", true);                                                                             // 88
    },                                                                                                                 // 89
                                                                                                                       // 90
    resetMessages: function () {                                                                                       // 91
      this._set("errorMessage", null);                                                                                 // 92
      this._set("infoMessage", null);                                                                                  // 93
    },                                                                                                                 // 94
                                                                                                                       // 95
    configureService: function (name) {                                                                                // 96
      this.set('configureLoginServiceDialogVisible', true);                                                            // 97
      this.set('configureLoginServiceDialogServiceName', name);                                                        // 98
      this.set('configureLoginServiceDialogSaveDisabled', true);                                                       // 99
    }                                                                                                                  // 100
  };                                                                                                                   // 101
}) ();                                                                                                                 // 102
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
    if (!Accounts._loginButtons)                                                                                       // 2
        Accounts._loginButtons = {};                                                                                   // 3
                                                                                                                       // 4
    // for convenience                                                                                                 // 5
    var loginButtonsSession = Accounts._loginButtonsSession;                                                           // 6
                                                                                                                       // 7
    UI.registerHelper("loginButtons", function () {                                                                    // 8
        return Template._loginButtons;                                                                                 // 9
    });                                                                                                                // 10
                                                                                                                       // 11
    // shared between dropdown and single mode                                                                         // 12
    Template._loginButtons.events({                                                                                    // 13
        'click #login-buttons-logout': function() {                                                                    // 14
            Meteor.logout(function() {                                                                                 // 15
                loginButtonsSession.closeDropdown();                                                                   // 16
            });                                                                                                        // 17
        }                                                                                                              // 18
    });                                                                                                                // 19
                                                                                                                       // 20
    //                                                                                                                 // 21
    // loginButtonLoggedOut template                                                                                   // 22
    //                                                                                                                 // 23
                                                                                                                       // 24
    Template._loginButtonsLoggedOut.dropdown = function() {                                                            // 25
        return Accounts._loginButtons.dropdown();                                                                      // 26
    };                                                                                                                 // 27
                                                                                                                       // 28
    Template._loginButtonsLoggedOut.services = function() {                                                            // 29
        return Accounts._loginButtons.getLoginServices();                                                              // 30
    };                                                                                                                 // 31
                                                                                                                       // 32
    Template._loginButtonsLoggedOut.singleService = function() {                                                       // 33
        var services = Accounts._loginButtons.getLoginServices();                                                      // 34
        if (services.length !== 1)                                                                                     // 35
            throw new Error(                                                                                           // 36
                "Shouldn't be rendering this template with more than one configured service");                         // 37
        return services[0];                                                                                            // 38
    };                                                                                                                 // 39
                                                                                                                       // 40
    Template._loginButtonsLoggedOut.configurationLoaded = function() {                                                 // 41
        return Accounts.loginServicesConfigured();                                                                     // 42
    };                                                                                                                 // 43
                                                                                                                       // 44
                                                                                                                       // 45
    //                                                                                                                 // 46
    // loginButtonsLoggedIn template                                                                                   // 47
    //                                                                                                                 // 48
                                                                                                                       // 49
    // decide whether we should show a dropdown rather than a row of                                                   // 50
    // buttons                                                                                                         // 51
    Template._loginButtonsLoggedIn.dropdown = function() {                                                             // 52
        return Accounts._loginButtons.dropdown();                                                                      // 53
    };                                                                                                                 // 54
                                                                                                                       // 55
    Template._loginButtonsLoggedIn.displayName = function() {                                                          // 56
        return Accounts._loginButtons.displayName();                                                                   // 57
    };                                                                                                                 // 58
                                                                                                                       // 59
                                                                                                                       // 60
                                                                                                                       // 61
    //                                                                                                                 // 62
    // loginButtonsMessage template                                                                                    // 63
    //                                                                                                                 // 64
                                                                                                                       // 65
    Template._loginButtonsMessages.errorMessage = function() {                                                         // 66
        return loginButtonsSession.get('errorMessage');                                                                // 67
    };                                                                                                                 // 68
                                                                                                                       // 69
    Template._loginButtonsMessages.infoMessage = function() {                                                          // 70
        return loginButtonsSession.get('infoMessage');                                                                 // 71
    };                                                                                                                 // 72
                                                                                                                       // 73
    //                                                                                                                 // 74
    // loginButtonsLoggingInPadding template                                                                           // 75
    //                                                                                                                 // 76
                                                                                                                       // 77
    Template._loginButtonsLoggingInPadding.dropdown = function() {                                                     // 78
        return Accounts._loginButtons.dropdown();                                                                      // 79
    };                                                                                                                 // 80
                                                                                                                       // 81
    //                                                                                                                 // 82
    // helpers                                                                                                         // 83
    //                                                                                                                 // 84
                                                                                                                       // 85
    Accounts._loginButtons.displayName = function() {                                                                  // 86
        var user = Meteor.user();                                                                                      // 87
        if (!user)                                                                                                     // 88
            return '';                                                                                                 // 89
                                                                                                                       // 90
        if (user.profile && user.profile.name)                                                                         // 91
            return user.profile.name;                                                                                  // 92
        if (user.username)                                                                                             // 93
            return user.username;                                                                                      // 94
        if (user.emails && user.emails[0] && user.emails[0].address)                                                   // 95
            return user.emails[0].address;                                                                             // 96
                                                                                                                       // 97
        return '';                                                                                                     // 98
    };                                                                                                                 // 99
                                                                                                                       // 100
    Accounts._loginButtons.getLoginServices = function() {                                                             // 101
        // First look for OAuth services.                                                                              // 102
        var services = Package['accounts-oauth'] ? Accounts.oauth.serviceNames() : [];                                 // 103
                                                                                                                       // 104
        // Be equally kind to all login services. This also preserves                                                  // 105
        // backwards-compatibility. (But maybe order should be                                                         // 106
        // configurable?)                                                                                              // 107
        services.sort();                                                                                               // 108
                                                                                                                       // 109
        // Add password, if it's there; it must come last.                                                             // 110
        if (this.hasPasswordService())                                                                                 // 111
            services.push('password');                                                                                 // 112
                                                                                                                       // 113
        return _.map(services, function(name) {                                                                        // 114
            return {                                                                                                   // 115
                name: name                                                                                             // 116
            };                                                                                                         // 117
        });                                                                                                            // 118
    };                                                                                                                 // 119
                                                                                                                       // 120
    Accounts._loginButtons.hasPasswordService = function() {                                                           // 121
        return !!Package['accounts-password'];                                                                         // 122
    };                                                                                                                 // 123
                                                                                                                       // 124
    Accounts._loginButtons.dropdown = function() {                                                                     // 125
        return this.hasPasswordService() || Accounts._loginButtons.getLoginServices().length > 1;                      // 126
    };                                                                                                                 // 127
                                                                                                                       // 128
    // XXX improve these. should this be in accounts-password instead?                                                 // 129
    //                                                                                                                 // 130
    // XXX these will become configurable, and will be validated on                                                    // 131
    // the server as well.                                                                                             // 132
    Accounts._loginButtons.validateUsername = function(username) {                                                     // 133
        if (username.length >= 3) {                                                                                    // 134
            return true;                                                                                               // 135
        } else {                                                                                                       // 136
            loginButtonsSession.errorMessage("Username must be at least 3 characters long");                           // 137
            return false;                                                                                              // 138
        }                                                                                                              // 139
    };                                                                                                                 // 140
    Accounts._loginButtons.validateEmail = function(email) {                                                           // 141
        if (Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL" && email === '')                     // 142
            return true;                                                                                               // 143
                                                                                                                       // 144
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                                                                                                                       // 146
        if (re.test(email)) {                                                                                          // 147
            return true;                                                                                               // 148
        } else {                                                                                                       // 149
            loginButtonsSession.errorMessage("Invalid email");                                                         // 150
            return false;                                                                                              // 151
        }                                                                                                              // 152
    };                                                                                                                 // 153
    Accounts._loginButtons.validatePassword = function(password) {                                                     // 154
        if (password.length >= 6) {                                                                                    // 155
            return true;                                                                                               // 156
        } else {                                                                                                       // 157
            loginButtonsSession.errorMessage("Password must be at least 6 characters long");                           // 158
            return false;                                                                                              // 159
        }                                                                                                              // 160
    };                                                                                                                 // 161
                                                                                                                       // 162
    Accounts._loginButtons.rendered = function () {                                                                    // 163
        debugger;                                                                                                      // 164
    };                                                                                                                 // 165
                                                                                                                       // 166
})();                                                                                                                  // 167
                                                                                                                       // 168
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_single.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
  // for convenience                                                                                                   // 2
  var loginButtonsSession = Accounts._loginButtonsSession;                                                             // 3
                                                                                                                       // 4
  Template._loginButtonsLoggedOutSingleLoginButton.events({                                                            // 5
    'click .login-button': function () {                                                                               // 6
      var serviceName = this.name;                                                                                     // 7
      loginButtonsSession.resetMessages();                                                                             // 8
      var callback = function (err) {                                                                                  // 9
        if (!err) {                                                                                                    // 10
          loginButtonsSession.closeDropdown();                                                                         // 11
        } else if (err instanceof Accounts.LoginCancelledError) {                                                      // 12
          // do nothing                                                                                                // 13
        } else if (err instanceof Accounts.ConfigError) {                                                              // 14
          loginButtonsSession.configureService(serviceName);                                                           // 15
        } else {                                                                                                       // 16
          loginButtonsSession.errorMessage(err.reason || "Unknown error");                                             // 17
        }                                                                                                              // 18
      };                                                                                                               // 19
                                                                                                                       // 20
      var loginWithService = Meteor["loginWith" + capitalize(serviceName)];                                            // 21
                                                                                                                       // 22
      var options = {}; // use default scope unless specified                                                          // 23
      if (Accounts.ui._options.requestPermissions[serviceName])                                                        // 24
        options.requestPermissions = Accounts.ui._options.requestPermissions[serviceName];                             // 25
                                                                                                                       // 26
      loginWithService(options, callback);                                                                             // 27
    }                                                                                                                  // 28
  });                                                                                                                  // 29
                                                                                                                       // 30
  Template._loginButtonsLoggedOutSingleLoginButton.configured = function () {                                          // 31
    return !!Accounts.loginServiceConfiguration.findOne({service: this.name});                                         // 32
  };                                                                                                                   // 33
                                                                                                                       // 34
  Template._loginButtonsLoggedOutSingleLoginButton.capitalizedName = function () {                                     // 35
    if (this.name === 'github')                                                                                        // 36
      // XXX we should allow service packages to set their capitalized name                                            // 37
      return 'GitHub';                                                                                                 // 38
    else                                                                                                               // 39
      return capitalize(this.name);                                                                                    // 40
  };                                                                                                                   // 41
                                                                                                                       // 42
  // XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                       // 43
  var capitalize = function(str){                                                                                      // 44
    str = str == null ? '' : String(str);                                                                              // 45
    return str.charAt(0).toUpperCase() + str.slice(1);                                                                 // 46
  };                                                                                                                   // 47
}) ();                                                                                                                 // 48
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_dropdown.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function() {                                                                                                          // 1
                                                                                                                       // 2
    // for convenience                                                                                                 // 3
    var loginButtonsSession = Accounts._loginButtonsSession;                                                           // 4
                                                                                                                       // 5
    // events shared between loginButtonsLoggedOutDropdown and                                                         // 6
    // loginButtonsLoggedInDropdown                                                                                    // 7
    Template._loginButtons.events({                                                                                    // 8
        'click input, click label, click button, click .dropdown-menu, click .alert': function(event) {                // 9
            event.stopPropagation();                                                                                   // 10
        },                                                                                                             // 11
        'click #login-name-link, click #login-sign-in-link': function() {                                              // 12
            event.stopPropagation();                                                                                   // 13
            loginButtonsSession.set('dropdownVisible', true);                                                          // 14
            Meteor.flush();                                                                                            // 15
        },                                                                                                             // 16
        'click .login-close': function() {                                                                             // 17
            loginButtonsSession.closeDropdown();                                                                       // 18
        }                                                                                                              // 19
    });                                                                                                                // 20
                                                                                                                       // 21
    Template._loginButtons.toggleDropdown = function() {                                                               // 22
      toggleDropdown();                                                                                                // 23
    };                                                                                                                 // 24
                                                                                                                       // 25
    //                                                                                                                 // 26
    // loginButtonsLoggedInDropdown template and related                                                               // 27
    //                                                                                                                 // 28
                                                                                                                       // 29
    Template._loginButtonsLoggedInDropdown.events({                                                                    // 30
        'click #login-buttons-open-change-password': function(event) {                                                 // 31
            event.stopPropagation();                                                                                   // 32
            loginButtonsSession.resetMessages();                                                                       // 33
            loginButtonsSession.set('inChangePasswordFlow', true);                                                     // 34
            Meteor.flush();                                                                                            // 35
            toggleDropdown();                                                                                          // 36
        }                                                                                                              // 37
    });                                                                                                                // 38
                                                                                                                       // 39
    Template._loginButtonsLoggedInDropdown.displayName = function() {                                                  // 40
        return Accounts._loginButtons.displayName();                                                                   // 41
    };                                                                                                                 // 42
                                                                                                                       // 43
    Template._loginButtonsLoggedInDropdown.inChangePasswordFlow = function() {                                         // 44
        return loginButtonsSession.get('inChangePasswordFlow');                                                        // 45
    };                                                                                                                 // 46
                                                                                                                       // 47
    Template._loginButtonsLoggedInDropdown.inMessageOnlyFlow = function() {                                            // 48
        return loginButtonsSession.get('inMessageOnlyFlow');                                                           // 49
    };                                                                                                                 // 50
                                                                                                                       // 51
    Template._loginButtonsLoggedInDropdown.dropdownVisible = function() {                                              // 52
        return loginButtonsSession.get('dropdownVisible');                                                             // 53
    };                                                                                                                 // 54
                                                                                                                       // 55
    Template._loginButtonsLoggedInDropdownActions.allowChangingPassword = function() {                                 // 56
        // it would be more correct to check whether the user has a password set,                                      // 57
        // but in order to do that we'd have to send more data down to the client,                                     // 58
        // and it'd be preferable not to send down the entire service.password document.                               // 59
        //                                                                                                             // 60
        // instead we use the heuristic: if the user has a username or email set.                                      // 61
        var user = Meteor.user();                                                                                      // 62
        return user.username || (user.emails && user.emails[0] && user.emails[0].address);                             // 63
    };                                                                                                                 // 64
                                                                                                                       // 65
                                                                                                                       // 66
    Template._loginButtonsLoggedInDropdownActions.additionalLoggedInDropdownActions = function () {                    // 67
      return Template._loginButtonsAdditionalLoggedInDropdownActions !== undefined;                                    // 68
    };                                                                                                                 // 69
                                                                                                                       // 70
    //                                                                                                                 // 71
    // loginButtonsLoggedOutDropdown template and related                                                              // 72
    //                                                                                                                 // 73
                                                                                                                       // 74
    Template._loginButtonsLoggedOutDropdown.events({                                                                   // 75
        'click #login-buttons-password': function() {                                                                  // 76
            loginOrSignup();                                                                                           // 77
        },                                                                                                             // 78
                                                                                                                       // 79
        'keypress #forgot-password-email': function(event) {                                                           // 80
            if (event.keyCode === 13)                                                                                  // 81
                forgotPassword();                                                                                      // 82
        },                                                                                                             // 83
                                                                                                                       // 84
        'click #login-buttons-forgot-password': function(event) {                                                      // 85
            event.stopPropagation();                                                                                   // 86
            forgotPassword();                                                                                          // 87
        },                                                                                                             // 88
                                                                                                                       // 89
        'click #signup-link': function(event) {                                                                        // 90
            event.stopPropagation();                                                                                   // 91
            loginButtonsSession.resetMessages();                                                                       // 92
                                                                                                                       // 93
            // store values of fields before swtiching to the signup form                                              // 94
            var username = trimmedElementValueById('login-username');                                                  // 95
            var email = trimmedElementValueById('login-email');                                                        // 96
            var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                  // 97
            // notably not trimmed. a password could (?) start or end with a space                                     // 98
            var password = elementValueById('login-password');                                                         // 99
                                                                                                                       // 100
            loginButtonsSession.set('inSignupFlow', true);                                                             // 101
            loginButtonsSession.set('inForgotPasswordFlow', false);                                                    // 102
                                                                                                                       // 103
            // force the ui to update so that we have the approprate fields to fill in                                 // 104
            Meteor.flush();                                                                                            // 105
                                                                                                                       // 106
            // update new fields with appropriate defaults                                                             // 107
            if (username !== null)                                                                                     // 108
                document.getElementById('login-username').value = username;                                            // 109
            else if (email !== null)                                                                                   // 110
                document.getElementById('login-email').value = email;                                                  // 111
            else if (usernameOrEmail !== null)                                                                         // 112
                if (usernameOrEmail.indexOf('@') === -1)                                                               // 113
                    document.getElementById('login-username').value = usernameOrEmail;                                 // 114
                else                                                                                                   // 115
                    document.getElementById('login-email').value = usernameOrEmail;                                    // 116
        },                                                                                                             // 117
        'click #forgot-password-link': function(event) {                                                               // 118
            event.stopPropagation();                                                                                   // 119
            loginButtonsSession.resetMessages();                                                                       // 120
                                                                                                                       // 121
            // store values of fields before swtiching to the signup form                                              // 122
            var email = trimmedElementValueById('login-email');                                                        // 123
            var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                  // 124
                                                                                                                       // 125
            loginButtonsSession.set('inSignupFlow', false);                                                            // 126
            loginButtonsSession.set('inForgotPasswordFlow', true);                                                     // 127
                                                                                                                       // 128
            // force the ui to update so that we have the approprate fields to fill in                                 // 129
            Meteor.flush();                                                                                            // 130
            //toggleDropdown();                                                                                        // 131
                                                                                                                       // 132
            // update new fields with appropriate defaults                                                             // 133
            if (email !== null)                                                                                        // 134
                document.getElementById('forgot-password-email').value = email;                                        // 135
            else if (usernameOrEmail !== null)                                                                         // 136
                if (usernameOrEmail.indexOf('@') !== -1)                                                               // 137
                    document.getElementById('forgot-password-email').value = usernameOrEmail;                          // 138
        },                                                                                                             // 139
        'click #back-to-login-link': function() {                                                                      // 140
            loginButtonsSession.resetMessages();                                                                       // 141
                                                                                                                       // 142
            var username = trimmedElementValueById('login-username');                                                  // 143
            var email = trimmedElementValueById('login-email') || trimmedElementValueById('forgot-password-email'); // Ughh. Standardize on names?
                                                                                                                       // 145
            loginButtonsSession.set('inSignupFlow', false);                                                            // 146
            loginButtonsSession.set('inForgotPasswordFlow', false);                                                    // 147
                                                                                                                       // 148
            // force the ui to update so that we have the approprate fields to fill in                                 // 149
            Meteor.flush();                                                                                            // 150
                                                                                                                       // 151
            if (document.getElementById('login-username'))                                                             // 152
                document.getElementById('login-username').value = username;                                            // 153
            if (document.getElementById('login-email'))                                                                // 154
                document.getElementById('login-email').value = email;                                                  // 155
            // "login-password" is preserved thanks to the preserve-inputs package                                     // 156
            if (document.getElementById('login-username-or-email'))                                                    // 157
                document.getElementById('login-username-or-email').value = email || username;                          // 158
        },                                                                                                             // 159
        'keypress #login-username, keypress #login-email, keypress #login-username-or-email, keypress #login-password, keypress #login-password-again': function(event) {
            if (event.keyCode === 13)                                                                                  // 161
                loginOrSignup();                                                                                       // 162
        }                                                                                                              // 163
    });                                                                                                                // 164
                                                                                                                       // 165
    // additional classes that can be helpful in styling the dropdown                                                  // 166
    Template._loginButtonsLoggedOutDropdown.additionalClasses = function() {                                           // 167
        if (!Accounts.password) {                                                                                      // 168
            return false;                                                                                              // 169
        } else {                                                                                                       // 170
            if (loginButtonsSession.get('inSignupFlow')) {                                                             // 171
                return 'login-form-create-account';                                                                    // 172
            } else if (loginButtonsSession.get('inForgotPasswordFlow')) {                                              // 173
                return 'login-form-forgot-password';                                                                   // 174
            } else {                                                                                                   // 175
                return 'login-form-sign-in';                                                                           // 176
            }                                                                                                          // 177
        }                                                                                                              // 178
    };                                                                                                                 // 179
                                                                                                                       // 180
    Template._loginButtonsLoggedOutDropdown.dropdownVisible = function() {                                             // 181
        return loginButtonsSession.get('dropdownVisible');                                                             // 182
    };                                                                                                                 // 183
                                                                                                                       // 184
    Template._loginButtonsLoggedOutDropdown.hasPasswordService = function() {                                          // 185
        return Accounts._loginButtons.hasPasswordService();                                                            // 186
    };                                                                                                                 // 187
                                                                                                                       // 188
    Template._loginButtonsLoggedOutDropdown.forbidClientAccountCreation = function() {                                 // 189
        return Accounts._options.forbidClientAccountCreation;                                                          // 190
    };                                                                                                                 // 191
                                                                                                                       // 192
    Template._loginButtonsLoggedOutAllServices.services = function() {                                                 // 193
        return Accounts._loginButtons.getLoginServices();                                                              // 194
    };                                                                                                                 // 195
                                                                                                                       // 196
    Template._loginButtonsLoggedOutAllServices.isPasswordService = function() {                                        // 197
        return this.name === 'password';                                                                               // 198
    };                                                                                                                 // 199
                                                                                                                       // 200
    Template._loginButtonsLoggedOutAllServices.hasOtherServices = function() {                                         // 201
        return Accounts._loginButtons.getLoginServices().length > 1;                                                   // 202
    };                                                                                                                 // 203
                                                                                                                       // 204
    Template._loginButtonsLoggedOutAllServices.hasPasswordService = function() {                                       // 205
        return Accounts._loginButtons.hasPasswordService();                                                            // 206
    };                                                                                                                 // 207
                                                                                                                       // 208
    Template._loginButtonsLoggedOutPasswordService.fields = function() {                                               // 209
        var loginFields = [{                                                                                           // 210
            fieldName: 'username-or-email',                                                                            // 211
            fieldLabel: 'Username or Email',                                                                           // 212
            visible: function() {                                                                                      // 213
                return _.contains(                                                                                     // 214
                    ["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL"],               // 215
                    Accounts.ui._passwordSignupFields());                                                              // 216
            }                                                                                                          // 217
        }, {                                                                                                           // 218
            fieldName: 'username',                                                                                     // 219
            fieldLabel: 'Username',                                                                                    // 220
            visible: function() {                                                                                      // 221
                return Accounts.ui._passwordSignupFields() === "USERNAME_ONLY";                                        // 222
            }                                                                                                          // 223
        }, {                                                                                                           // 224
            fieldName: 'email',                                                                                        // 225
            fieldLabel: 'Email',                                                                                       // 226
            inputType: 'email',                                                                                        // 227
            visible: function() {                                                                                      // 228
                return Accounts.ui._passwordSignupFields() === "EMAIL_ONLY";                                           // 229
            }                                                                                                          // 230
        }, {                                                                                                           // 231
            fieldName: 'password',                                                                                     // 232
            fieldLabel: 'Password',                                                                                    // 233
            inputType: 'password',                                                                                     // 234
            visible: function() {                                                                                      // 235
                return true;                                                                                           // 236
            }                                                                                                          // 237
        }];                                                                                                            // 238
                                                                                                                       // 239
        var signupFields = [{                                                                                          // 240
            fieldName: 'username',                                                                                     // 241
            fieldLabel: 'Username',                                                                                    // 242
            visible: function() {                                                                                      // 243
                return _.contains(                                                                                     // 244
                    ["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],
                    Accounts.ui._passwordSignupFields());                                                              // 246
            }                                                                                                          // 247
        }, {                                                                                                           // 248
            fieldName: 'email',                                                                                        // 249
            fieldLabel: 'Email',                                                                                       // 250
            inputType: 'email',                                                                                        // 251
            visible: function() {                                                                                      // 252
                return _.contains(                                                                                     // 253
                    ["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "EMAIL_ONLY"],                                // 254
                    Accounts.ui._passwordSignupFields());                                                              // 255
            }                                                                                                          // 256
        }, {                                                                                                           // 257
            fieldName: 'email',                                                                                        // 258
            fieldLabel: 'Email (optional)',                                                                            // 259
            inputType: 'email',                                                                                        // 260
            visible: function() {                                                                                      // 261
                return Accounts.ui._passwordSignupFields() === "USERNAME_AND_OPTIONAL_EMAIL";                          // 262
            }                                                                                                          // 263
        }, {                                                                                                           // 264
            fieldName: 'password',                                                                                     // 265
            fieldLabel: 'Password',                                                                                    // 266
            inputType: 'password',                                                                                     // 267
            visible: function() {                                                                                      // 268
                return true;                                                                                           // 269
            }                                                                                                          // 270
        }, {                                                                                                           // 271
            fieldName: 'password-again',                                                                               // 272
            fieldLabel: 'Password (again)',                                                                            // 273
            inputType: 'password',                                                                                     // 274
            visible: function() {                                                                                      // 275
                // No need to make users double-enter their password if                                                // 276
                // they'll necessarily have an email set, since they can use                                           // 277
                // the "forgot password" flow.                                                                         // 278
                return _.contains(                                                                                     // 279
                    ["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                    // 280
                    Accounts.ui._passwordSignupFields());                                                              // 281
            }                                                                                                          // 282
        }];                                                                                                            // 283
                                                                                                                       // 284
        signupFields = Accounts.ui._options.extraSignupFields.concat(signupFields);                                    // 285
                                                                                                                       // 286
        return loginButtonsSession.get('inSignupFlow') ? signupFields : loginFields;                                   // 287
    };                                                                                                                 // 288
                                                                                                                       // 289
    Template._loginButtonsLoggedOutPasswordService.inForgotPasswordFlow = function() {                                 // 290
        return loginButtonsSession.get('inForgotPasswordFlow');                                                        // 291
    };                                                                                                                 // 292
                                                                                                                       // 293
    Template._loginButtonsLoggedOutPasswordService.inLoginFlow = function() {                                          // 294
        return !loginButtonsSession.get('inSignupFlow') && !loginButtonsSession.get('inForgotPasswordFlow');           // 295
    };                                                                                                                 // 296
                                                                                                                       // 297
    Template._loginButtonsLoggedOutPasswordService.inSignupFlow = function() {                                         // 298
        return loginButtonsSession.get('inSignupFlow');                                                                // 299
    };                                                                                                                 // 300
                                                                                                                       // 301
    Template._loginButtonsLoggedOutPasswordService.showForgotPasswordLink = function() {                               // 302
        return _.contains(                                                                                             // 303
            ["USERNAME_AND_EMAIL_CONFIRM", "USERNAME_AND_EMAIL", "USERNAME_AND_OPTIONAL_EMAIL", "EMAIL_ONLY"],         // 304
            Accounts.ui._passwordSignupFields());                                                                      // 305
    };                                                                                                                 // 306
                                                                                                                       // 307
    Template._loginButtonsLoggedOutPasswordService.showCreateAccountLink = function() {                                // 308
        return !Accounts._options.forbidClientAccountCreation;                                                         // 309
    };                                                                                                                 // 310
                                                                                                                       // 311
    Template._loginButtonsFormField.inputType = function() {                                                           // 312
        return this.inputType || "text";                                                                               // 313
    };                                                                                                                 // 314
                                                                                                                       // 315
                                                                                                                       // 316
    //                                                                                                                 // 317
    // loginButtonsChangePassword template                                                                             // 318
    //                                                                                                                 // 319
                                                                                                                       // 320
    Template._loginButtonsChangePassword.events({                                                                      // 321
        'keypress #login-old-password, keypress #login-password, keypress #login-password-again': function(event) {    // 322
            if (event.keyCode === 13)                                                                                  // 323
                changePassword();                                                                                      // 324
        },                                                                                                             // 325
        'click #login-buttons-do-change-password': function(event) {                                                   // 326
            event.stopPropagation();                                                                                   // 327
            changePassword();                                                                                          // 328
        }                                                                                                              // 329
    });                                                                                                                // 330
                                                                                                                       // 331
    Template._loginButtonsChangePassword.fields = function() {                                                         // 332
        return [{                                                                                                      // 333
            fieldName: 'old-password',                                                                                 // 334
            fieldLabel: 'Current Password',                                                                            // 335
            inputType: 'password',                                                                                     // 336
            visible: function() {                                                                                      // 337
                return true;                                                                                           // 338
            }                                                                                                          // 339
        }, {                                                                                                           // 340
            fieldName: 'password',                                                                                     // 341
            fieldLabel: 'New Password',                                                                                // 342
            inputType: 'password',                                                                                     // 343
            visible: function() {                                                                                      // 344
                return true;                                                                                           // 345
            }                                                                                                          // 346
        }, {                                                                                                           // 347
            fieldName: 'password-again',                                                                               // 348
            fieldLabel: 'New Password (again)',                                                                        // 349
            inputType: 'password',                                                                                     // 350
            visible: function() {                                                                                      // 351
                // No need to make users double-enter their password if                                                // 352
                // they'll necessarily have an email set, since they can use                                           // 353
                // the "forgot password" flow.                                                                         // 354
                return _.contains(                                                                                     // 355
                    ["USERNAME_AND_OPTIONAL_EMAIL", "USERNAME_ONLY"],                                                  // 356
                    Accounts.ui._passwordSignupFields());                                                              // 357
            }                                                                                                          // 358
        }];                                                                                                            // 359
    };                                                                                                                 // 360
                                                                                                                       // 361
                                                                                                                       // 362
    //                                                                                                                 // 363
    // helpers                                                                                                         // 364
    //                                                                                                                 // 365
                                                                                                                       // 366
    var elementValueById = function(id) {                                                                              // 367
        var element = document.getElementById(id);                                                                     // 368
        if (!element)                                                                                                  // 369
            return null;                                                                                               // 370
        else                                                                                                           // 371
            return element.value;                                                                                      // 372
    };                                                                                                                 // 373
                                                                                                                       // 374
    var trimmedElementValueById = function(id) {                                                                       // 375
        var element = document.getElementById(id);                                                                     // 376
        if (!element)                                                                                                  // 377
            return null;                                                                                               // 378
        else                                                                                                           // 379
            return element.value.replace(/^\s*|\s*$/g, ""); // trim;                                                   // 380
    };                                                                                                                 // 381
                                                                                                                       // 382
    var loginOrSignup = function() {                                                                                   // 383
        if (loginButtonsSession.get('inSignupFlow'))                                                                   // 384
            signup();                                                                                                  // 385
        else                                                                                                           // 386
            login();                                                                                                   // 387
    };                                                                                                                 // 388
                                                                                                                       // 389
    var login = function() {                                                                                           // 390
        loginButtonsSession.resetMessages();                                                                           // 391
                                                                                                                       // 392
        var username = trimmedElementValueById('login-username');                                                      // 393
        var email = trimmedElementValueById('login-email');                                                            // 394
        var usernameOrEmail = trimmedElementValueById('login-username-or-email');                                      // 395
        // notably not trimmed. a password could (?) start or end with a space                                         // 396
        var password = elementValueById('login-password');                                                             // 397
                                                                                                                       // 398
        var loginSelector;                                                                                             // 399
        if (username !== null) {                                                                                       // 400
            if (!Accounts._loginButtons.validateUsername(username))                                                    // 401
                return;                                                                                                // 402
            else                                                                                                       // 403
                loginSelector = {                                                                                      // 404
                    username: username                                                                                 // 405
                };                                                                                                     // 406
        } else if (email !== null) {                                                                                   // 407
            if (!Accounts._loginButtons.validateEmail(email))                                                          // 408
                return;                                                                                                // 409
            else                                                                                                       // 410
                loginSelector = {                                                                                      // 411
                    email: email                                                                                       // 412
                };                                                                                                     // 413
        } else if (usernameOrEmail !== null) {                                                                         // 414
            // XXX not sure how we should validate this. but this seems good enough (for now),                         // 415
            // since an email must have at least 3 characters anyways                                                  // 416
            if (!Accounts._loginButtons.validateUsername(usernameOrEmail))                                             // 417
                return;                                                                                                // 418
            else                                                                                                       // 419
                loginSelector = usernameOrEmail;                                                                       // 420
        } else {                                                                                                       // 421
            throw new Error("Unexpected -- no element to use as a login user selector");                               // 422
        }                                                                                                              // 423
                                                                                                                       // 424
        Meteor.loginWithPassword(loginSelector, password, function(error, result) {                                    // 425
            if (error) {                                                                                               // 426
                loginButtonsSession.errorMessage(error.reason || "Unknown error");                                     // 427
            } else {                                                                                                   // 428
                loginButtonsSession.closeDropdown();                                                                   // 429
            }                                                                                                          // 430
        });                                                                                                            // 431
    };                                                                                                                 // 432
                                                                                                                       // 433
    var toggleDropdown = function() {                                                                                  // 434
        $('#login-dropdown-list .dropdown-menu').dropdown('toggle');                                                   // 435
    };                                                                                                                 // 436
                                                                                                                       // 437
    var signup = function() {                                                                                          // 438
        loginButtonsSession.resetMessages();                                                                           // 439
                                                                                                                       // 440
        var options = {}; // to be passed to Accounts.createUser                                                       // 441
                                                                                                                       // 442
        var username = trimmedElementValueById('login-username');                                                      // 443
        if (username !== null) {                                                                                       // 444
            if (!Accounts._loginButtons.validateUsername(username))                                                    // 445
                return;                                                                                                // 446
            else                                                                                                       // 447
                options.username = username;                                                                           // 448
        }                                                                                                              // 449
                                                                                                                       // 450
        var email = trimmedElementValueById('login-email');                                                            // 451
        if (email !== null) {                                                                                          // 452
            if (!Accounts._loginButtons.validateEmail(email))                                                          // 453
                return;                                                                                                // 454
            else                                                                                                       // 455
                options.email = email;                                                                                 // 456
        }                                                                                                              // 457
                                                                                                                       // 458
        // notably not trimmed. a password could (?) start or end with a space                                         // 459
        var password = elementValueById('login-password');                                                             // 460
        if (!Accounts._loginButtons.validatePassword(password))                                                        // 461
            return;                                                                                                    // 462
        else                                                                                                           // 463
            options.password = password;                                                                               // 464
                                                                                                                       // 465
        if (!matchPasswordAgainIfPresent())                                                                            // 466
            return;                                                                                                    // 467
                                                                                                                       // 468
        // prepare the profile object                                                                                  // 469
        options.profile = {};                                                                                          // 470
                                                                                                                       // 471
        // define a proxy function to allow extraSignupFields set error messages                                       // 472
        var errorFn = function(errorMessage) {                                                                         // 473
            Accounts._loginButtonsSession.errorMessage(errorMessage);                                                  // 474
        };                                                                                                             // 475
                                                                                                                       // 476
        var invalidExtraSignupFields = false;                                                                          // 477
                                                                                                                       // 478
        // parse extraSignupFields to populate account's profile data                                                  // 479
        _.each(Accounts.ui._options.extraSignupFields, function(field, index) {                                        // 480
            var value = elementValueById('login-' + field.fieldName);                                                  // 481
            if (typeof field.validate === 'function') {                                                                // 482
                if (field.validate(value, errorFn)) {                                                                  // 483
                    options.profile[field.fieldName] = elementValueById('login-' + field.fieldName);                   // 484
                } else {                                                                                               // 485
                    invalidExtraSignupFields = true;                                                                   // 486
                }                                                                                                      // 487
            } else {                                                                                                   // 488
                options.profile[field.fieldName] = elementValueById('login-' + field.fieldName);                       // 489
            }                                                                                                          // 490
        });                                                                                                            // 491
                                                                                                                       // 492
        if (invalidExtraSignupFields)                                                                                  // 493
            return;                                                                                                    // 494
                                                                                                                       // 495
        Accounts.createUser(options, function(error) {                                                                 // 496
            if (error) {                                                                                               // 497
                loginButtonsSession.errorMessage(error.reason || "Unknown error");                                     // 498
            } else {                                                                                                   // 499
                loginButtonsSession.closeDropdown();                                                                   // 500
            }                                                                                                          // 501
        });                                                                                                            // 502
    };                                                                                                                 // 503
                                                                                                                       // 504
    var forgotPassword = function() {                                                                                  // 505
        loginButtonsSession.resetMessages();                                                                           // 506
                                                                                                                       // 507
        var email = trimmedElementValueById("forgot-password-email");                                                  // 508
        if (email.indexOf('@') !== -1) {                                                                               // 509
            Accounts.forgotPassword({                                                                                  // 510
                email: email                                                                                           // 511
            }, function(error) {                                                                                       // 512
                if (error)                                                                                             // 513
                    loginButtonsSession.errorMessage(error.reason || "Unknown error");                                 // 514
                else                                                                                                   // 515
                    loginButtonsSession.infoMessage("Email sent");                                                     // 516
            });                                                                                                        // 517
        } else {                                                                                                       // 518
            loginButtonsSession.infoMessage("Email sent");                                                             // 519
        }                                                                                                              // 520
    };                                                                                                                 // 521
                                                                                                                       // 522
    var changePassword = function() {                                                                                  // 523
        loginButtonsSession.resetMessages();                                                                           // 524
                                                                                                                       // 525
        // notably not trimmed. a password could (?) start or end with a space                                         // 526
        var oldPassword = elementValueById('login-old-password');                                                      // 527
                                                                                                                       // 528
        // notably not trimmed. a password could (?) start or end with a space                                         // 529
        var password = elementValueById('login-password');                                                             // 530
        if (!Accounts._loginButtons.validatePassword(password))                                                        // 531
            return;                                                                                                    // 532
                                                                                                                       // 533
        if (!matchPasswordAgainIfPresent())                                                                            // 534
            return;                                                                                                    // 535
                                                                                                                       // 536
        Accounts.changePassword(oldPassword, password, function(error) {                                               // 537
            if (error) {                                                                                               // 538
                loginButtonsSession.errorMessage(error.reason || "Unknown error");                                     // 539
            } else {                                                                                                   // 540
                loginButtonsSession.infoMessage("Password changed");                                                   // 541
                                                                                                                       // 542
                // wait 3 seconds, then expire the msg                                                                 // 543
                Meteor.setTimeout(function() {                                                                         // 544
                    loginButtonsSession.resetMessages();                                                               // 545
                }, 3000);                                                                                              // 546
            }                                                                                                          // 547
        });                                                                                                            // 548
    };                                                                                                                 // 549
                                                                                                                       // 550
    var matchPasswordAgainIfPresent = function() {                                                                     // 551
        // notably not trimmed. a password could (?) start or end with a space                                         // 552
        var passwordAgain = elementValueById('login-password-again');                                                  // 553
        if (passwordAgain !== null) {                                                                                  // 554
            // notably not trimmed. a password could (?) start or end with a space                                     // 555
            var password = elementValueById('login-password');                                                         // 556
            if (password !== passwordAgain) {                                                                          // 557
                loginButtonsSession.errorMessage("Passwords don't match");                                             // 558
                return false;                                                                                          // 559
            }                                                                                                          // 560
        }                                                                                                              // 561
        return true;                                                                                                   // 562
    };                                                                                                                 // 563
})();                                                                                                                  // 564
                                                                                                                       // 565
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/accounts-ui-bootstrap-3/login_buttons_dialogs.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {                                                                                                         // 1
  // for convenience                                                                                                   // 2
  var loginButtonsSession = Accounts._loginButtonsSession;                                                             // 3
                                                                                                                       // 4
                                                                                                                       // 5
  //                                                                                                                   // 6
  // populate the session so that the appropriate dialogs are                                                          // 7
  // displayed by reading variables set by accounts-urls, which parses                                                 // 8
  // special URLs. since accounts-ui depends on accounts-urls, we are                                                  // 9
  // guaranteed to have these set at this point.                                                                       // 10
  //                                                                                                                   // 11
                                                                                                                       // 12
  if (Accounts._resetPasswordToken) {                                                                                  // 13
    loginButtonsSession.set('resetPasswordToken', Accounts._resetPasswordToken);                                       // 14
  }                                                                                                                    // 15
                                                                                                                       // 16
  if (Accounts._enrollAccountToken) {                                                                                  // 17
    loginButtonsSession.set('enrollAccountToken', Accounts._enrollAccountToken);                                       // 18
  }                                                                                                                    // 19
                                                                                                                       // 20
  // Needs to be in Meteor.startup because of a package loading order                                                  // 21
  // issue. We can't be sure that accounts-password is loaded earlier                                                  // 22
  // than accounts-ui so Accounts.verifyEmail might not be defined.                                                    // 23
  Meteor.startup(function () {                                                                                         // 24
    if (Accounts._verifyEmailToken) {                                                                                  // 25
      Accounts.verifyEmail(Accounts._verifyEmailToken, function(error) {                                               // 26
        Accounts._enableAutoLogin();                                                                                   // 27
        if (!error)                                                                                                    // 28
          loginButtonsSession.set('justVerifiedEmail', true);                                                          // 29
        // XXX show something if there was an error.                                                                   // 30
      });                                                                                                              // 31
    }                                                                                                                  // 32
  });                                                                                                                  // 33
                                                                                                                       // 34
                                                                                                                       // 35
  //                                                                                                                   // 36
  // resetPasswordDialog template                                                                                      // 37
  //                                                                                                                   // 38
  Template._resetPasswordDialog.rendered = function() {                                                                // 39
    var $modal = $(this.find('#login-buttons-reset-password-modal'));                                                  // 40
    $modal.modal();                                                                                                    // 41
  }                                                                                                                    // 42
                                                                                                                       // 43
  Template._resetPasswordDialog.events({                                                                               // 44
    'click #login-buttons-reset-password-button': function () {                                                        // 45
      resetPassword();                                                                                                 // 46
    },                                                                                                                 // 47
    'keypress #reset-password-new-password': function (event) {                                                        // 48
      if (event.keyCode === 13)                                                                                        // 49
        resetPassword();                                                                                               // 50
    },                                                                                                                 // 51
    'click #login-buttons-cancel-reset-password': function () {                                                        // 52
      loginButtonsSession.set('resetPasswordToken', null);                                                             // 53
      Accounts._enableAutoLogin();                                                                                     // 54
      $('#login-buttons-reset-password-modal').modal("hide");                                                          // 55
    }                                                                                                                  // 56
  });                                                                                                                  // 57
                                                                                                                       // 58
  var resetPassword = function () {                                                                                    // 59
    loginButtonsSession.resetMessages();                                                                               // 60
    var newPassword = document.getElementById('reset-password-new-password').value;                                    // 61
    if (!Accounts._loginButtons.validatePassword(newPassword))                                                         // 62
      return;                                                                                                          // 63
                                                                                                                       // 64
    Accounts.resetPassword(                                                                                            // 65
      loginButtonsSession.get('resetPasswordToken'), newPassword,                                                      // 66
      function (error) {                                                                                               // 67
        if (error) {                                                                                                   // 68
          loginButtonsSession.errorMessage(error.reason || "Unknown error");                                           // 69
        } else {                                                                                                       // 70
          loginButtonsSession.set('resetPasswordToken', null);                                                         // 71
          Accounts._enableAutoLogin();                                                                                 // 72
          $('#login-buttons-reset-password-modal').modal("hide");                                                      // 73
        }                                                                                                              // 74
      });                                                                                                              // 75
  };                                                                                                                   // 76
                                                                                                                       // 77
  Template._resetPasswordDialog.inResetPasswordFlow = function () {                                                    // 78
    return loginButtonsSession.get('resetPasswordToken');                                                              // 79
  };                                                                                                                   // 80
                                                                                                                       // 81
                                                                                                                       // 82
  //                                                                                                                   // 83
  // enrollAccountDialog template                                                                                      // 84
  //                                                                                                                   // 85
                                                                                                                       // 86
  Template._enrollAccountDialog.events({                                                                               // 87
    'click #login-buttons-enroll-account-button': function () {                                                        // 88
      enrollAccount();                                                                                                 // 89
    },                                                                                                                 // 90
    'keypress #enroll-account-password': function (event) {                                                            // 91
      if (event.keyCode === 13)                                                                                        // 92
        enrollAccount();                                                                                               // 93
    },                                                                                                                 // 94
    'click #login-buttons-cancel-enroll-account-button': function () {                                                 // 95
      loginButtonsSession.set('enrollAccountToken', null);                                                             // 96
      Accounts._enableAutoLogin();                                                                                     // 97
      $modal.modal("hide");                                                                                            // 98
    }                                                                                                                  // 99
  });                                                                                                                  // 100
                                                                                                                       // 101
  Template._enrollAccountDialog.rendered = function() {                                                                // 102
    $modal = $(this.find('#login-buttons-enroll-account-modal'));                                                      // 103
    $modal.modal();                                                                                                    // 104
  };                                                                                                                   // 105
                                                                                                                       // 106
  var enrollAccount = function () {                                                                                    // 107
    loginButtonsSession.resetMessages();                                                                               // 108
    var password = document.getElementById('enroll-account-password').value;                                           // 109
    if (!Accounts._loginButtons.validatePassword(password))                                                            // 110
      return;                                                                                                          // 111
                                                                                                                       // 112
    Accounts.resetPassword(                                                                                            // 113
      loginButtonsSession.get('enrollAccountToken'), password,                                                         // 114
      function (error) {                                                                                               // 115
        if (error) {                                                                                                   // 116
          loginButtonsSession.errorMessage(error.reason || "Unknown error");                                           // 117
        } else {                                                                                                       // 118
          loginButtonsSession.set('enrollAccountToken', null);                                                         // 119
          Accounts._enableAutoLogin();                                                                                 // 120
          $modal.modal("hide");                                                                                        // 121
        }                                                                                                              // 122
      });                                                                                                              // 123
  };                                                                                                                   // 124
                                                                                                                       // 125
  Template._enrollAccountDialog.inEnrollAccountFlow = function () {                                                    // 126
    return loginButtonsSession.get('enrollAccountToken');                                                              // 127
  };                                                                                                                   // 128
                                                                                                                       // 129
                                                                                                                       // 130
  //                                                                                                                   // 131
  // justVerifiedEmailDialog template                                                                                  // 132
  //                                                                                                                   // 133
                                                                                                                       // 134
  Template._justVerifiedEmailDialog.events({                                                                           // 135
    'click #just-verified-dismiss-button': function () {                                                               // 136
      loginButtonsSession.set('justVerifiedEmail', false);                                                             // 137
    }                                                                                                                  // 138
  });                                                                                                                  // 139
                                                                                                                       // 140
  Template._justVerifiedEmailDialog.visible = function () {                                                            // 141
    return loginButtonsSession.get('justVerifiedEmail');                                                               // 142
  };                                                                                                                   // 143
                                                                                                                       // 144
                                                                                                                       // 145
  //                                                                                                                   // 146
  // loginButtonsMessagesDialog template                                                                               // 147
  //                                                                                                                   // 148
                                                                                                                       // 149
  // Template._loginButtonsMessagesDialog.rendered = function() {                                                      // 150
  //   var $modal = $(this.find('#configure-login-service-dialog-modal'));                                             // 151
  //   $modal.modal();                                                                                                 // 152
  // }                                                                                                                 // 153
                                                                                                                       // 154
  Template._loginButtonsMessagesDialog.events({                                                                        // 155
    'click #messages-dialog-dismiss-button': function () {                                                             // 156
      loginButtonsSession.resetMessages();                                                                             // 157
    }                                                                                                                  // 158
  });                                                                                                                  // 159
                                                                                                                       // 160
  Template._loginButtonsMessagesDialog.visible = function () {                                                         // 161
    var hasMessage = loginButtonsSession.get('infoMessage') || loginButtonsSession.get('errorMessage');                // 162
    return !Accounts._loginButtons.dropdown() && hasMessage;                                                           // 163
  };                                                                                                                   // 164
                                                                                                                       // 165
                                                                                                                       // 166
  //                                                                                                                   // 167
  // configureLoginServiceDialog template                                                                              // 168
  //                                                                                                                   // 169
                                                                                                                       // 170
  Template._configureLoginServiceDialog.events({                                                                       // 171
    'click .configure-login-service-dismiss-button': function () {                                                     // 172
      loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                            // 173
    },                                                                                                                 // 174
    'click #configure-login-service-dialog-save-configuration': function () {                                          // 175
      if (loginButtonsSession.get('configureLoginServiceDialogVisible') &&                                             // 176
          ! loginButtonsSession.get('configureLoginServiceDialogSaveDisabled')) {                                      // 177
        // Prepare the configuration document for this login service                                                   // 178
        var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                           // 179
        var configuration = {                                                                                          // 180
          service: serviceName                                                                                         // 181
        };                                                                                                             // 182
        _.each(configurationFields(), function(field) {                                                                // 183
          configuration[field.property] = document.getElementById(                                                     // 184
            'configure-login-service-dialog-' + field.property).value                                                  // 185
            .replace(/^\s*|\s*$/g, ""); // trim;                                                                       // 186
        });                                                                                                            // 187
                                                                                                                       // 188
        // Configure this login service                                                                                // 189
        Meteor.call("configureLoginService", configuration, function (error, result) {                                 // 190
          if (error)                                                                                                   // 191
            Meteor._debug("Error configuring login service " + serviceName, error);                                    // 192
          else                                                                                                         // 193
            loginButtonsSession.set('configureLoginServiceDialogVisible', false);                                      // 194
        });                                                                                                            // 195
      }                                                                                                                // 196
    },                                                                                                                 // 197
    // IE8 doesn't support the 'input' event, so we'll run this on the keyup as                                        // 198
    // well. (Keeping the 'input' event means that this also fires when you use                                        // 199
    // the mouse to change the contents of the field, eg 'Cut' menu item.)                                             // 200
    'input, keyup input': function (event) {                                                                           // 201
      // if the event fired on one of the configuration input fields,                                                  // 202
      // check whether we should enable the 'save configuration' button                                                // 203
      if (event.target.id.indexOf('configure-login-service-dialog') === 0)                                             // 204
        updateSaveDisabled();                                                                                          // 205
    }                                                                                                                  // 206
  });                                                                                                                  // 207
                                                                                                                       // 208
  // check whether the 'save configuration' button should be enabled.                                                  // 209
  // this is a really strange way to implement this and a Forms                                                        // 210
  // Abstraction would make all of this reactive, and simpler.                                                         // 211
  var updateSaveDisabled = function () {                                                                               // 212
    var anyFieldEmpty = _.any(configurationFields(), function(field) {                                                 // 213
      return document.getElementById(                                                                                  // 214
        'configure-login-service-dialog-' + field.property).value === '';                                              // 215
    });                                                                                                                // 216
                                                                                                                       // 217
    loginButtonsSession.set('configureLoginServiceDialogSaveDisabled', anyFieldEmpty);                                 // 218
  };                                                                                                                   // 219
                                                                                                                       // 220
  // Returns the appropriate template for this login service.  This                                                    // 221
  // template should be defined in the service's package                                                               // 222
  var configureLoginServiceDialogTemplateForService = function () {                                                    // 223
    var serviceName = loginButtonsSession.get('configureLoginServiceDialogServiceName');                               // 224
    return Template['configureLoginServiceDialogFor' + capitalize(serviceName)];                                       // 225
  };                                                                                                                   // 226
                                                                                                                       // 227
  var configurationFields = function () {                                                                              // 228
    var template = configureLoginServiceDialogTemplateForService();                                                    // 229
    return template.fields();                                                                                          // 230
  };                                                                                                                   // 231
                                                                                                                       // 232
  Template._configureLoginServiceDialog.configurationFields = function () {                                            // 233
    return configurationFields();                                                                                      // 234
  };                                                                                                                   // 235
                                                                                                                       // 236
  Template._configureLoginServiceDialog.visible = function () {                                                        // 237
    return loginButtonsSession.get('configureLoginServiceDialogVisible');                                              // 238
  };                                                                                                                   // 239
                                                                                                                       // 240
  Template._configureLoginServiceDialog.configurationSteps = function () {                                             // 241
    // renders the appropriate template                                                                                // 242
    return configureLoginServiceDialogTemplateForService()();                                                          // 243
  };                                                                                                                   // 244
                                                                                                                       // 245
  Template._configureLoginServiceDialog.saveDisabled = function () {                                                   // 246
    return loginButtonsSession.get('configureLoginServiceDialogSaveDisabled');                                         // 247
  };                                                                                                                   // 248
                                                                                                                       // 249
                                                                                                                       // 250
  // XXX from http://epeli.github.com/underscore.string/lib/underscore.string.js                                       // 251
  var capitalize = function(str){                                                                                      // 252
    str = str == null ? '' : String(str);                                                                              // 253
    return str.charAt(0).toUpperCase() + str.slice(1);                                                                 // 254
  };                                                                                                                   // 255
                                                                                                                       // 256
}) ();                                                                                                                 // 257
                                                                                                                       // 258
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
if (typeof Package === 'undefined') Package = {};
Package['accounts-ui-bootstrap-3'] = {};

})();

//# sourceMappingURL=21b2fec0bad5c23734094f20fe2979c4b10cfde9.map
