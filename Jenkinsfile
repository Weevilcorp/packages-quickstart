pipeline {
    agent { label 'agent2' }
    stages {
        stage('build') {
            steps {
                sh 'docker compose up'
                sh 'docker compose exec packages-quickstart npm ci'
                sh 'docker compose exec packages-quickstart npm test'
                sh 'docker compose down'
            }
        }
    }
}
