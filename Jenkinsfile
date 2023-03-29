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

        stage('Set GitHub status') {
            steps {
                githubSetCommitStatus context: 'Jenkins', state: 'PENDING', message: 'Building...', commitSha1: env.GIT_COMMIT
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
                        githubSetCommitStatus context: 'Jenkins', state: success ? 'SUCCESS' : 'FAILURE', message: success ? 'Build succeeded' : 'Build failed', commitSha1: env.GIT_COMMIT
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