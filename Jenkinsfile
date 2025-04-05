pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/tejaswinibatti/mydevops-project.git'
            }
        }

        stage('Build') {
            steps {
                sh 'echo "Building the application..."'
            }
        }

        stage('Deploy') {
            steps {
                sh 'echo "Deploying the application..."'
            }
        }
    }
}
