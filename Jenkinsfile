pipeline {
  agent { label "vmware" }

  environment {
    GITHUB_MACHINE = credentials("GITHUB_MACHINE_USER")
    VM_NAME = "Ubuntu 18.04.3"
  }

  stages {
    stage("Setup") {
      steps {
        sh label: "Download virtual machine scripts",
          script: "rm -rf tmp/tools && mkdir -p tmp && git clone git@github.com:simplymadeapps/vmware-jenkins-tools.git tmp/tools"

        sh label: "Set up virtual machine",
          script: "tmp/tools/ubuntu/setup.sh"

        sh label: "Install Dependencies",
          script: ".jenkins/ubuntu/install_dependencies.sh"
      }
    }

    stage("Test") {
      steps {
        sh label: "yarn test:all",
          script: "tmp/tools/ubuntu/run.sh 'yarn test:all'"
      }
    }

    stage("Publish") {
      when {
        branch "master"
      }

      steps {
        sh label: "yarn build",
          script: "tmp/tools/ubuntu/run.sh 'yarn build'"

        sh label: "Publish npm module",
          script: "tmp/tools/ubuntu/run.sh '.jenkins/ubuntu/publish.sh'"
      }
    }
  }

  post {
    cleanup {
      sh "tmp/tools/ubuntu/cleanup.sh"
      deleteDir()
    }

    failure {
      mail body: "<h2>simpleinout-js-date-time-picker Build Failure</h2>Build Number: ${env.BUILD_NUMBER}<br>Branch: ${BRANCH_NAME}<br>Build URL: ${env.JENKINS_URL}/blue/organizations/jenkins/${env.JOB_NAME.minus(BRANCH_NAME)}detail/${BRANCH_NAME}/${env.BUILD_NUMBER}/pipeline",
           charset: "UTF-8",
           from: "notice@simpleinout.com",
           mimeType: "text/html",
           subject: "simpleinout-js-date-time-picker Build Failure: ${env.JOB_NAME}",
           to: "contact@simplymadeapps.com";
    }
  }
}
