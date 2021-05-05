job ('New_MAVEN_Job_2') {
    description ("First Maven Job generated by the DSL on ${new Date()}, the procject is a small Maven project hosted on github")

   scm{
       git("https://github.com/lokeshdeepu12/Jenkins.git", master)
   } 
   triggers {
       scm('* * * * *')
   }
   steps {
       maven('clean package', 'maven-samples/single-module/pom.xml')
   }
   publishers {
       //archive the war file generated
       archiveArtifacts '**/*.jar'
   }
}