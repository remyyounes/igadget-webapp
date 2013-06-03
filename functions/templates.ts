# Template Functions
# -----------------------------

@func XMLNode.placeholder(Text %xpath, Text %text) {
  $(%xpath) {
    insert("span", %text) {
      yield()
    }
  }
}

# Automatically clobber attributes that are not a class or ID
@func XMLNode.detect_attributes() {
  $attributes = fetch("./self::*")
  $attributes { 
    replace(/^\<\w*\s?([\w\=\"\s\-\_\'\;\(\)\{\}\[\]\.]*)\>?.*/m, "$1")
  }
  
  #test
  # $attributes = 'id="content" class="something" data-attr="somethingtoo"'
  $temp = $attributes

  $one = $attributes
  $two = $attributes
  $three = $attributes
  $four = $attributes
  $five = $attributes
  $six = $attributes
  $seven = $attributes
  $eight = $attributes
  $nine = $attributes
  $ten = $attributes

  $1 = ""
  $2 = ""

  # detect attributes
  $temp {
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $one = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $two = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $three = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $four = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $five = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $six = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $seven = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $eight = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $nine = $1
      set($2)
    }
    replace(/.*?([\w\-]*)\=(.+)?/) {
      $ten = $1
      set($2)
    }
  }

  # Control for id and class
  match($one) {
    with($attributes) {
      $one = ""
    }
    with("id") {
      $one = ""
    }
    with("class") {
      $one = ""
    }
  }
  match($two) {
    with($attributes) {
      $two = ""
    }
    with("id") {
      $two = ""
    }
    with("class") {
      $two = ""
    }
  }
  match($three) {
    with($attributes) {
      $three = ""
    }
    with("id") {
      $three = ""
    }
    with("class") {
      $three = ""
    }
  }
  match($four) {
    with($attributes) {
      $four = ""
    }
    with("id") {
      $four = ""
    }
    with("class") {
      $four = ""
    }
  }
  match($five) {
    with($attributes) {
      $five = ""
    }
    with("id") {
      $five = ""
    }
    with("class") {
      $five = ""
    }
  }
  match($six) {
    with($attributes) {
      $six = ""
    }
    with("id") {
      $six = ""
    }
    with("class") {
      $six = ""
    }
  }
  match($seven) {
    with($attributes) {
      $seven = ""
    }
    with("id") {
      $seven = ""
    }
    with("class") {
      $seven = ""
    }
  }
  match($eight) {
    with($attributes) {
      $eight = ""
    }
    with("id") {
      $eight = ""
    }
    with("class") {
      $eight = ""
    }
  }
  match($nine) {
    with($attributes) {
      $nine = ""
    }
    with("id") {
      $nine = ""
    }
    with("class") {
      $nine = ""
    }
  }
  match($ten) {
    with($attributes) {
      $ten = ""
    }
    with("id") {
      $ten = ""
    }
    with("class") {
      $ten = ""
    }
  }

  # Log Attributes
  # log($one)
  # log($two)
  # log($three)
  # log($four)
  # log($five)
  # log($six)
  # log($seven)
  # log($eight)
  # log($nine)
  # log($ten)
}

# unwraps a node
@func XMLNode.unwrap() {
  move_children_to(this(), position("before"))
  remove()
}

# Transfer children to passed target node
@func XMLNode.transfer_children(Text %target) {
  $this = path()
  $(%target) {
    copy_here($this+"/*[not(self) and not(contains(@data-template, 'merging'))]") {
      attribute("data-template", "child"+index())
    }
  }
  $("./*[not(self) and not(contains(@data-template, 'merging'))]") {
    remove()
  }
}

# Adds the attribute instead of clobbering
@func XMLNode.add_attribute(Text %attribute, Text %value) {
  attribute(%attribute, fetch("@"+%attribute)+" "+%value)
}

# If the value is prepended with a space it will be added instead of
# clobbered.
@func XMLNode.attr(Text %attr, Text %val) {
  $val = %val
  match(%val) {
    with(/^\s.*$/) {
      $val {
        replace(/^\s(.*)$/, "$1")
      }
      add_attribute(%attr, $val)
    }
    else() {
      attribute(%attr, %val)
    }
  }
}

# Make sure you are fetching a valid attribute if not return nothing
@func XMLNode.valid_fetch(Text %xpath) {
  $test = "@"+%xpath
  match($test) {
    with("@") {
      $test = ""
    }
    else() {
      $test = fetch($test)
    }
  }
  $test
}

# Copy the detected attributes to the target node
@func XMLNode.copy_attributes_to(Text %xpath) {

  detect_attributes()
  
  %one = valid_fetch($one)
  %two = valid_fetch($two)
  %three = valid_fetch($three)
  %four = valid_fetch($four)
  %five = valid_fetch($five)
  %six = valid_fetch($six)
  %seven = valid_fetch($seven)
  %eight = valid_fetch($eight)
  %nine = valid_fetch($nine)
  %ten = valid_fetch($ten)

  $(%xpath) {
    attribute($one, %one)
    attribute($two, %two)
    attribute($three, %three)
    attribute($four, %four)
    attribute($five, %five)
    attribute($six, %six)
    attribute($seven, %seven)
    attribute($eight, %eight)
    attribute($nine, %nine)
    attribute($ten, %ten)
  }
}

# Add attribute
@func XMLNode.add_attributes_to(Text %xpath, Text %one) {
  %one_fetched = fetch("@"+%one)
  $(%xpath) {
    add_attribute(%one, %one_fetched)
  }
}

# Copy the attributes and transfer the children
@func XMLNode.merge_and_keep_attributes(Text %to_merge) {
  copy_attributes_to(%to_merge)
  transfer_children(%to_merge)
}

# Keep ID of the to_merge node, merge classes, and clobber other attributes
@func XMLNode.template_match(Text %template_type, Text %to_merge) {
  
  # set id if %to_merge doesn't have one 
  %id = fetch("@id")
  $(%to_merge) {
    match(fetch("@id")) {
      with(/[\w]+/) {
        # do nothing
      }
      else() {
        attribute("id", %id)
      }
    }
  }

  # merge classes
  %class = " " + fetch("@class")
  $(%to_merge) {
    attr("class", %class)
  }

  # merge rest of attributes
  merge_and_keep_attributes(%to_merge)
}

# Merge
# Use: for filling out templates
# Searches the template for element (there can only be one) with the
# given class. Moves the provided element(s) into that element, and
# merges their attributes.
# Attribute merge priority:
# The moving element's name and ID will clobber. 
# The template's attributes will clobber.
# Only the classes will be added.
# Children are merged as well.
# Then the template element is removed.
# TODO: bug: if you merge it with invalid input crazy stuff happens
# TODO: Make placeholder functionality. Maybe fill() or placeholder().
@func XMLNode.merge(Text %template_selector, Text %to_merge) {
  # TODO: Validate selectors

  # Detect Template Type
  %type = fetch("./ancestor-or-self::div[not(contains(@data-template, 'merging'))]/@data-template")

  # Marking with unique identifier
  $(%to_merge) {
    attribute("data-template", "merging"+index())
  }

  # Move the merge target
  $(%template_selector) {
    match(index(), "1") {
      move_here("/html/body//*[contains(@data-template, 'merging')]")
    }
  }

  # Match template with proper attributes to keep then merge
  # Set other elements in the template with the same content
  $inner = ""
  $(%template_selector) {
    match(index()) {
      with("1") {
        template_match(%type, "/html/body//*[contains(@data-template, 'merging')]")
      }
      else() {
        $this = path()
        copy_here("/html/body//*[contains(@data-template, 'merging')]") {
          copy_here($this+"/*[not(self) and not(contains(@data-template, 'merging'))]")
          remove(".//*[contains(@data-template, 'child')]")
        }
        remove("./*[not(self) and not(contains(@data-template, 'merging'))]")
        remove(".//descendant-or-self::*[contains(@data-template, 'merging')]/@data-template")
      }
    }
    unwrap()
  }
  $("/html/body//*[contains(@data-template, 'child')]") {
    attribute("data-template", "")
  }
  # Unset unique identifier data-template="merging"
  $("/html/body//*[contains(@data-template, 'merging')]") {
    attribute("data-template", "")
    yield()
  }
}

# Matches the template type with the proper path to read
# NOTE: When defining your own template you must add a match to
# this function.
@func XMLNode.read_helper(Text %type) {
  $return = ""
  match(%type) {
    # Standard Page Layouts
    with("_header") {
      $return = read("templates/_header.html") 
    }
    with("_help_btn") {
      $return = read("templates/_help_btn.html") 
    }
    with("_help_mask") {
      $return = read("templates/_help_mask.html") 
    }
    with("_existing_content") {
      $return = read("templates/_existing_content.html") 
    }
    with("_footer") {
      $return = read("templates/_footer.html") 
    }
    with("_placeholder_carousel") {
      $return = read("templates/_placeholder_carousel.html") 
    }
    # Uranium Widgets
    with("_toggler") {
      $return = read("templates/_toggler.html")
    }
    with("_carousel") {
      $return = read("templates/_carousel.html") 
    }
    # jQuery Mobile Widgets
    with("_jqm_collapsible") {
      $return = read("templates/jqm/_collapsible.html") 
    }
    with("_jqm_collapsible_set") {
      $return = read("templates/jqm/_collapsible_set.html") 
    }
    with("_jqm_header") {
      $return = read("templates/jqm/_header.html") 
    }
    with("_jqm_footer") {
      $return = read("templates/jqm/_footer.html") 
    }
    with("_jqm_navbar") {
      $return = read("templates/jqm/_navbar.html") 
    }
    with("_jqm_panel") {
      $return = read("templates/jqm/_panel.html") 
    }
    with("_jqm_listview") {
      $return = read("templates/jqm/_listview.html") 
    }
    else() {
      log("Template not found.")
    }
  }
  $return
}

# Inject Template
# read doesn't take variable arguments or you'd just take a path here...
@func XMLNode.template(Text %type, Text %id, Text %pos) {
  inject_at(position(%pos), "<div id='"+%id+"' data-template='"+%type+"'>"
          +read_helper(%type)+"</div>")
  $("//div[@id='"+%id+"'][1]") {
    yield()
  }
}

@func XMLNode.template(Text %type, Text %id) {
  template(%type, %id, "bottom") {
    yield()
  }
}