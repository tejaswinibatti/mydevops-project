pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/your-repo.git'
            }
        }
        stage('Build') {
            steps {
                sh 'echo Building the application...'
            }
        }
        stage('Deploy') {
            steps {
                sh 'echo Deploying to server...'
            }
        }
    }
}
