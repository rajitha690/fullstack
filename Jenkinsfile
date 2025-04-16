pipeline {
    agent any

    stages {
        stage('Clone Repositories') {
            steps {
                dir('frontendreactjs') {
                    git 'https://github.com/dimpleswapna/frontendreactjs.git'
                }
                dir('backendnodejs') {
                    git 'https://github.com/dimpleswapna/backendnodejs.git'
                }
                dir('DBmongodb') {
                    git 'https://github.com/dimpleswapna/DBmongodb.git'
                }
            }
        }

        stage('Build and Deploy with Docker Compose') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose build'
                sh 'docker-compose up -d'
            }
        }

        stage('Verify Services') {
            steps {
                sh 'docker ps'
            }
        }
    }

    post {
        success {
            echo '✅ Full-stack app deployed successfully!'
        }
        failure {
            echo '❌ Deployment failed.'
        }
    }
}
