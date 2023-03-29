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