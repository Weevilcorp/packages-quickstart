pipeline {
    agent {
        docker { image 'sharpfranklin/node:18-alpine3.15' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'npm ci'
                sh 'npm test'
            }
        }
    }
}
