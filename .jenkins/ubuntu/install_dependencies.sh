install_node() {
  echo "Install Node"
  # Download the latest binaries
  tmp/tools/ubuntu/run.sh "curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.34.0/install.sh | bash"

  # Install Node
  tmp/tools/ubuntu/run.sh "nvm install --lts"
}

install_yarn() {
  echo "Install Yarn"
  tmp/tools/ubuntu/run.sh "curl -o- -L https://yarnpkg.com/install.sh | bash"
}

npm_config() {
  echo "NPM Config"

  command="echo '//npm.pkg.github.com/:_authToken=$GITHUB_MACHINE_PSW' > .npmrc"
  command+=" && echo '@simplymadeapps:registry=https://npm.pkg.github.com' >> .npmrc"

  tmp/tools/ubuntu/run.sh "$command"
}

yarn_install() {
  echo "yarn install"
  tmp/tools/ubuntu/run.sh "yarn install --network-timeout 1000000"
}

main() {
  npm_config && \
  install_node && \
  install_yarn && \
  yarn_install
}

# Allow for multiple attempts to install dependencies
for i in $(seq 5); do
  main && break
  if [ $i == 5 ]; then
    exit 1
  else
    sleep 5
  fi
done
