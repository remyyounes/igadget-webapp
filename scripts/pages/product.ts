$("body") {
  # Must be insert_top because JQM looks for first legitimate page to set as active...
  insert_top("div", data-role:"page", id:"product") {
    # adding iscroll
    attribute("data-iscroll", "data-iscroll")
    move_here("/html/body/div[@id='_header']") {
      $$("._logo") {
        add_class("_back")
        $$(".sprites-logo") {
          name("a")
          attributes(data-rel:"back", data-role:"button")
          insert("span", "BACK", class:"_back_text")
        }
      }
    }
    insert("div", class:"_content", data-role:"content") {
      move_here("/html/body//div[@id='Container']") {
        # Make product images into jqm buttons
        $(".//div[contains(@class, 'ProductImage')]") {
          $(".//a") {
            attribute("data-role", "button")
          }
        }
        $$(".ProductThumbImage") {
          $$("a") {
            name("div")
            remove("@href")
            remove("@onclick")
          }
        }

        # Remove unnecessary page elements
        remove("/html/body//div[@id='ProductBreadcrumb']")
        remove("/html/body//div[@id='ProductReviews']/a")
        remove("/html/body//div[@id='SideProductAddToWishList']")
        remove("/html/body//div[@id='SideProductRelated']")
        remove("/html/body//div[@id='SideProductRecentlyViewed']")
        remove("/html/body//div[@id='ProductByCategory']")
        remove("/html/body//div[@id='SimilarProductsByCustomerViews']")
        remove("/html/body//div[contains(@class, 'AddThisButtonBox')]")

        #
        remove("/html/body//div[@class='DetailRow PriceRow']/div[@class='Label']")

        # TEMP: Remove product images carousel elements temporarily
        remove("/html/body//div[@class='ImageCarouselBox']")

        #Remove detailed reviews - we can later think if we want to have another page for product reviews
        remove("/html/body//div[@id='ProductReviews']")

        $(".//div[@class='ProductDetailsGrid']//div[contains(text(),'Shipping')]/.."){
            remove()
        }

        # Move elements into proper structure
        # product name after price
        $(".//div[contains(@id,'ProductDetails')]/div[@class='BlockContent']/h2") {
          name("div")
          attribute("class", "DetailRow Title")
        }
        $(".//div[@class='DetailRow PriceRow']"){
          move_here("/html/body//div[@class='DetailRow Title']", "after")
        }
        $(".//div[@class='ProductDetailsGrid']//div[contains(text(),'Rating')]/.."){
          attribute("class", "DetailRow Rating")
        }
        $(".//div[@class='ProductDetailsGrid']//div[contains(text(),'Brand')]"){
          $("../div[@class='Value']/a") {

            attribute("href") {
              remove()
            }

          }
          remove()
        }

        #make Rating a seperate DIV under DIV ProductMain
        $(".//div[@class='productAddToCartRight']"){
          move_here("/html/body//div[@class='DetailRow Rating']", "after")    
        }
        #insert lines between
        $(".//div[@class='ProductDetailsGrid']"){
          insert_after("hr")
        }
        $(".//div[@class='productAddToCartRight']"){
          insert_after("hr")
        }
        $(".//div[@class='DetailRow Rating']"){
          insert_after("hr")
        }

        #move product description in productmain
        $(".//div[@id='ProductDetails']/div[@class='BlockContent']"){
          move_here("/html/body//div[@id='ProductDescription']")
          attribute("class","product_container")
        }

        # Add necessary attributes and classes to elements
        #move product description in productmain
        $(".//div[@id='LayoutColumn2']"){
          attribute("id","product")
        }

        $(".//div[@id='ProductDescription']"){
          attribute("class","ProductDescription")
        }

        $(".//div[@class='ProductMain']"){
          move_here("/html/body//div[@class='ProductDescription']")
        }

        $(".//div[@id='SimilarProductsByCustomerViews']"){
          attribute("class","SimilarProductsByViews")
        }

        #price
        $(".//div[@class='DetailRow PriceRow']/div[@class='Value']"){
          attribute("class","price")
        }

        #title
        $(".//div[@class='DetailRow Title']"){
          attribute("class","title")
        }

        #sku
        $(".//div[@class='DetailRow ProductSKU']"){
          attribute("class","sku")
        }

        #quanitity heading
        $(".//div[@class='Label QuantityInput']"){
          attribute("class","quantity")
        }

        #quantity selection box
        #$(".//div[@class='Value AddCartButton']//div[@class='ui-select']//span[@class='ui-btn-inner']/.."){
        $(".//div[@class='Value AddCartButton']"){
          # $("./select") {
          #   add_class("mw_testing")
          # }
          #$("./div[@class='ui-select']"){
            #attribute("class","quantitybox")
          #remove()
          #}
          $$("input[type='image']") {
            wrap("div", class:"addCart _btn_green1")
            attribute("type", "submit")
            attribute("value", "Add to Cart")
          }
        }

        #rating heading
        $(".//div[@class='DetailRow Rating']/div[@class='Label']"){
          attribute("class","Header")
        }

        #prod desc heading
        $(".//div[@class='ProductDescription']/h3"){
          attribute("class","Header")
        } 

        #similarproducts heading
        $(".//div[@class='SimilarProductsByViews']/h3"){
          attribute("class","SimilarProductsByViews")
        } 

        #
        $(".//div[@class='ProductDescriptionContainer']/p"){
          attribute("class","ProdDesc")
        } 
        $(".//div[@class='ProductDescriptionContainer']/ul"){
          attribute("class","ProdFeatures")
        } 

        #remove after changing attributes
        $(".//div[@class='ProductDescription']/hr"){
          remove()
        }

        $(".//div[@class='product_container']/hr"){
          remove()
        }
      }
    }
    move_here("/html/body/div[@id='_footer']") {
      $$("._shop") {
        add_class("active")
      }
    }

    # Image carousel for Also Viewed section...
    # $$(".BlockContent") {
    #   add_class("gjklsfsjk")
    # }
  }

  # Remove persistent content that would be duplicated
  remove("/html/body//div[@id='AjaxLoading']")
  remove("/html/body//div[@id='TopMenu']")
  remove("/html/body//div[@id='Menu']")
  remove("/html/body//div[@id='SideNewProducts']")
  remove("/html/body//div[@id='Header']")
  remove("/html/body//div[@id='Footer']")
}