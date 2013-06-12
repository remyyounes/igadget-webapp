$("body") {
  # Transform product page html
  insert("div", data-role:"page", id:"login") {
    move_here("/html/body//div[@id='_header']")
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        $$("#LoginBreadcrumb") {
          remove()
        }
        insert_top("div", "Your Account", class:"title _h1") {
          insert_after("hr")
        }
        $$("h2") {
          add_class("_h2")
        }
        $$(".AccountLogin") {
          move_to("..", "top")
          $$("form") {
            add_class("_form")
            # attribute("action", rewrite_insecure(fetch("@action")))
            $$("#login_email") {
              attribute("placeholder", "email")
            }
            $$("#login_pass") {
              attribute("placeholder", "password")
            }
            remove(".//dt")
          }
          $$("h2") {
            text("Login")
          }
          $$(".Submit") {
            add_class("_btn_green1")
            $$("a") {
              add_class("forgot_password")
              move_to("../..")
            }
            remove(".//br")
          }
        }
        $$(".CreateAccount") {
          move_here(".//a") {
            text("Create an Account")
            add_class("_btn_green1 _signup")
          }
          remove("./div | h2")
        }
      }
    }
    move_here("/html/body//div[@id='_footer']") {
      $$("._more") {
        add_class("active")
      }
    }
  }

  # Remove header content we don't want duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='Wrapper']/div[@id='LayoutColumn1']")
  remove("/html/body//div[@id='LayoutColumn1']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}

