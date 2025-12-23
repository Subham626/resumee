document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input, textarea, select');
    const templateSelector = document.getElementById('templateSelector');
    const fresherCheckbox = document.getElementById('fresher-checkbox');

    // Debounce function to limit update frequency
    let timeout = null;
    const debounceUpdate = () => {
        clearTimeout(timeout);
        timeout = setTimeout(updateAll, 100);
    };

    function updateAll() {
        const data = {
            name: document.getElementById('name').value || "Jane Doe",
            title: document.getElementById('title').value || "Professional Title",
            phone: document.getElementById('phone').value || "(123) 456-7890",
            email: document.getElementById('email').value || "jane@example.com",
            linkedin: document.getElementById('linkedin').value || "linkedin.com/in/jane",
            summary: document.getElementById('summary').value || "Executive summary goes here...",
            experience: document.getElementById('experience').value,
            education: document.getElementById('education').value,
            skills: document.getElementById('skills').value.split(',').map(s => s.trim()).filter(s => s)
        };

        const isFresher = fresherCheckbox.checked;

        // Update Template 8 specifically
        document.getElementById('t8-name').innerText = data.name;
        document.getElementById('t8-title').innerText = data.title;
        document.getElementById('t8-phone').innerText = data.phone;
        document.getElementById('t8-email').innerText = data.email;
        document.getElementById('t8-linkedin').innerText = data.linkedin;
        document.getElementById('t8-summary').innerText = data.summary;
        document.getElementById('t8-experience').innerText = data.experience;
        document.getElementById('t8-education').innerText = data.education;
        document.getElementById('t8-exp-section').style.display = isFresher ? 'none' : 'block';

        const t8Skills = document.getElementById('t8-skills');
        t8Skills.innerHTML = data.skills.map(s => `<div style="background:rgba(255,255,255,0.1); padding:5px; border-radius:4px; font-size:0.8rem;">• ${s}</div>`).join('');

        // Update Template 1 (Modern)
        document.getElementById('t1-name').innerText = data.name;
        document.getElementById('t1-title').innerText = data.title;
        document.getElementById('t1-phone').innerText = data.phone;
        document.getElementById('t1-email').innerText = data.email;
        document.getElementById('t1-linkedin').innerText = data.linkedin;
        document.getElementById('t1-summary').innerText = data.summary;
        document.getElementById('t1-experience').innerText = data.experience;
        document.getElementById('t1-education').innerText = data.education;
        document.getElementById('t1-exp-section').style.display = isFresher ? 'none' : 'block';
        document.getElementById('t1-skills').innerHTML = data.skills.map(s => `<span class="t1-skill-tag">${s}</span>`).join('');

        // Update Template 2 (Classic)
        document.getElementById('t2-name').innerText = data.name;
        document.getElementById('t2-title').innerText = data.title;
        document.getElementById('t2-phone').innerText = data.phone;
        document.getElementById('t2-email').innerText = data.email;
        document.getElementById('t2-linkedin').innerText = data.linkedin;
        document.getElementById('t2-summary').innerText = data.summary;
        document.getElementById('t2-experience').innerText = data.experience;
        document.getElementById('t2-education').innerText = data.education;
        document.getElementById('t2-exp-section').style.display = isFresher ? 'none' : 'block';
        document.getElementById('t2-skills').innerText = data.skills.join(' • ');

        // Update Template 7 (ATS)
        document.getElementById('t7-name').innerText = data.name;
        document.getElementById('t7-title').innerText = data.title;
        document.getElementById('t7-phone').innerText = data.phone;
        document.getElementById('t7-email').innerText = data.email;
        document.getElementById('t7-linkedin').innerText = data.linkedin;
        document.getElementById('t7-summary').innerText = data.summary;
        document.getElementById('t7-experience').innerText = data.experience;
        document.getElementById('t7-education').innerText = data.education;
        document.getElementById('t7-exp-section').style.display = isFresher ? 'none' : 'block';
        document.getElementById('t7-skills').innerText = data.skills.join(', ');
    }

    // Photo Upload
    document.getElementById('photo').addEventListener('change', function(e) {
        const reader = new FileReader();
        reader.onload = (event) => {
            document.querySelectorAll('.resume-photo').forEach(img => {
                img.src = event.target.result;
                img.style.display = 'block';
            });
        };
        reader.readAsDataURL(e.target.files[0]);
    });

    // Template Switching
    templateSelector.addEventListener('change', (e) => {
        document.querySelectorAll('.resume-template').forEach(t => t.style.display = 'none');
        document.getElementById(e.target.value).style.display = 'flex';
    });

    // Theme Customization
    document.getElementById('themeColor').addEventListener('input', (e) => {
        document.documentElement.style.setProperty('--theme-color', e.target.value);
    });

    inputs.forEach(input => input.addEventListener('input', debounceUpdate));
    fresherCheckbox.addEventListener('change', updateAll);
    
    updateAll(); // Initial call
});