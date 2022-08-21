pipeline {
    agent { label 'agent2' }
    stages {
        stage('build') {
            steps {
                sh 'docker version'
            }
        }
    }
}
