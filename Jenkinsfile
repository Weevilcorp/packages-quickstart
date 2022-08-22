pipeline {
    agent {
        docker { image 'sharpfranklin/node:18-alpine3.15' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
                sh 'yarn install --frozen-lockfile'
                sh 'npm test'
            }
        }
    }
}
