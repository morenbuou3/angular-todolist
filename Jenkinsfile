pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                echo 'before npm install'
                sh 'npm install'
                echo 'after npm install'
            }
        }
    }
}