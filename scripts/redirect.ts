insert("html") {
  insert("head")
  insert("body") {
    insert("div", "", data-role:"page", id:"redirect") {
      # insert("div", data-role:"header")
      insert("div", data-role:"content") {      
        $new_location = rewrite_insecure($location)
        inner() {
          $new_location = url($new_location) {
            host($host)
          }
        }
        log("NEW LOCATION: " + $new_location)
        insert("script", "$.mobile.changePage('"+$new_location+"');")
        export("Location", $new_location)
      }
      # insert("div", data-role:"footer")
    }
  }
}

# set("TESTING HARD CODED SET")