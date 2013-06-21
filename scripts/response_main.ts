# add_header("Access-Control-Allow-Origin", "*")

# iterate over headers
parse_headers() {

}

# Overriding redirect status returns because we are using JQM to AJAX content in.
match($status, "302") {
  $override_status = "200"
  $status_200 = "OK"
  replace(/^(HTTP.*?) .*/, "$1 " + $override_status + " " + var("status_" + $override_status))
}