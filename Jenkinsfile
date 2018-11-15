pipeline {
    agent {
        docker {
            image 'lleon/jenkins-slave-docker-node-chrome'
            args '-p 3000:3000 -v /var/run/docker.sock:/var/run/docker.sock'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                echo 'before npm install'
                sh 'npm install'
                echo 'after npm install'
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
        stage('Deploy') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
                sh './jenkins/scripts/create.sh'
            }
        }
    }
}