# Homepage Transformation
$("./body") {
  add_class("_home")

  # Inserting the main container
  $(".//div[@id='_header']") {
    insert_after("div", id:"_container")
  }

  $$("#_container") {  
    # Hero image
    insert("div", class:"_hero_img") {
      insert("img", src: asset("images/jqm.png"))
    }
    # Insert Callouts
    insert("div", class:"_callout") {
      insert("a", "Callout", class:"_btn_green2", data-role: "button", 
              data-inline:"true")
    }
    # jQuery Mobile Collapsible Set
    template("_jqm_collapsible_set", "_categories") {
      $$("._collapsible > h3") {
        text("Category")
        add_class("_bar_gray2")
      }
      $$("._collapsible_content") {
        insert("ul") {
          insert("li", "List Item", class:"_bar_green2")
          insert("li", "List Item", class:"_bar_green2")
        }
      }
    }
    
  }
}
