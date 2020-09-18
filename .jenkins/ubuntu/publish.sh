local_version() {
  node -pe "require('./package.json').version"
}

npm_publish() {
  echo "npm publish"
  npm publish
}

published_version() {
  npm show ./ version
}

main() {
  if [ "$(local_version)" != "$(published_version)" ]; then
    npm_publish
  else
    echo "Version $(local_version) is already published"
  fi
}

main
