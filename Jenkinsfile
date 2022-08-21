pipeline {
    agent { label 'agent2' }
    stages {
        stage('build') {
            steps {
                sh 'docker run -v $(pwd):/usr/src/app sharpfranklin/node:18-alpine3.15 node index.js'
            }
        }
    }
}
