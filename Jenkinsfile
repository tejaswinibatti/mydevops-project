pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/tejaswinibatti/mydevops-project.git'
            }
        }

        stage('Build') {
            steps {
                echo 'Building the application...'
                // Add any build steps if needed
            }
        }

        stage('Deploy to S3') {
            steps {
                script {
                    echo 'Deploying to S3...'
                    sh 'aws s3 sync . s3://myystaticwebsitebuc/ --delete'
                }
            }
        }
    }
}
