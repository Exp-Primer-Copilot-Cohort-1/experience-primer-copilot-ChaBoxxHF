function skillsMember() {
    // Skills
    var skills = document.getElementById('skills');
    var skillsMember = document.getElementById('skillsMember');
    var skillsMemberClose = document.getElementById('skillsMemberClose');

    skills.onclick = function () {
        skillsMember.style.display = 'block';
    }

    skillsMemberClose.onclick = function () {
        skillsMember.style.display = 'none';
    }
}