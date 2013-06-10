# add_header("Access-Control-Allow-Origin", "*")
parse_headers() {

}
match($status, "302") {
  $override_status = "200"
  $status_200 = "OK"
  replace(/^(HTTP.*?) .*/, "$1 " + $override_status + " " + var("status_" + $override_status))
  remove_header("Location")
}