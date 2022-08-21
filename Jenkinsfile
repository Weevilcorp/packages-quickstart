pipeline {
    agent { label 'agent2' }
    stages {
        stage('build') {
            steps {
                sh 'docker compose -f docker-compose-testing.yml up -d'
                sh 'docker compose -f docker-compose-testing.yml exec packages-quickstart npm ci'
                sh 'docker compose -f docker-compose-testing.yml exec packages-quickstart npm test'
                sh 'docker compose -f docker-compose-testing.yml down'
                sh 'docker compose down'
                sh 'docker compose up -d'
            }
        }
    }
}
