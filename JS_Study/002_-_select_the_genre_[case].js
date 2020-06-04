<script>

//remember: usually case this for verification with one variable. And the conditional IF this for most one variable!

sex = prompt('Please insert letter of one genre (M = Male/F = Female)')

	switch (sex) {
		case 'M':
			sex = 'Male';
			break; // exit switch and don't execute next case 'F': 
		case 'F':
			sex = 'Female';
		default:
			sex = 'Other';
	}

alert('Sex in switch case: ' + sex)

</script>