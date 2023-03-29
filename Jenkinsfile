def getRepoURL() {
  sh "git config --get remote.origin.url > .git/remote-url"
  return readFile(".git/remote-url").trim()
}

def getCommitSha() {
  sh "git rev-parse HEAD > .git/current-commit"
  return readFile(".git/current-commit").trim()
}

def updateGithubCommitStatus(build) {
  // workaround https://issues.jenkins-ci.org/browse/JENKINS-38674
  repoUrl = getRepoURL()
  commitSha = getCommitSha()

  step([
    $class: 'GitHubCommitStatusSetter',
    reposSource: [$class: "ManuallyEnteredRepositorySource", url: repoUrl],
    commitShaSource: [$class: "ManuallyEnteredShaSource", sha: commitSha],
    errorHandlers: [[$class: 'ShallowAnyErrorHandler']],
    statusResultSource: [
      $class: 'ConditionalStatusResultSource',
      results: [
        [$class: 'BetterThanOrEqualBuildResult', result: 'SUCCESS', state: 'SUCCESS', message: build.description],
        [$class: 'BetterThanOrEqualBuildResult', result: 'FAILURE', state: 'FAILURE', message: build.description],
        [$class: 'AnyBuildResult', state: 'FAILURE', message: 'Loophole']
      ]
    ]
  ])
}

pipeline {
    agent {
        node {
            label 'mac'
        }
    }
    
    environment {
        PATH = "${tool 'nodejs'}/bin:${env.PATH}"
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                sh 'npm install --no-audit'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Clean') {
            steps {
                sh 'npm run clean'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
            post {
                always {
                    script {
                        def success = currentBuild.result == 'SUCCESS'
                        updateGithubCommitStatus(currentBuild)
                    }
                }
            }
        }

        stage('Set pull request status') {
            when {
                beforeAgent true
                expression { env.GIT_BRANCH.startsWith('refs/pull/') }
            }
            steps {
                githubSetPullRequestStatus context: 'Jenkins', state: 'PENDING', message: 'Building...', commitSha1: env.GIT_COMMIT
            }
        }
        
        stage('Deploy') {
            environment {
                FIREBASE_TOKEN = credentials('firebase-token')
            } 
            steps {
                sh 'npm install -g firebase-tools'
                sh 'firebase deploy --token $FIREBASE_TOKEN'
            }
        }
    }
}