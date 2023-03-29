pipeline {
    agent {
        node {
            label 'mac'
        }
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install Dependencies') {
            steps {
                def npmPath = tool 'nodejs'
                withEnv(["PATH+NODE=${npmPath}/bin"]) {
                sh 'npm install'
            }
        }
        
        stage('Lint') {
            steps {
                sh 'npm run lint'
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
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
