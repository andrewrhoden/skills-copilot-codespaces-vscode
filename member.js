function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'template.html',
        controller: 'MemberController',
        controllers: ['Controller1', 'Controller2'],
        bindController: true,
        scope: {
            skill: '='
        }
    };
}

// Example usage:
const memberSkills = skillsMember();
console.log(memberSkills);
