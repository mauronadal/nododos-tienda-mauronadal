import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Message = ({ compraID }) => {
	return (
		<Stack sx={{ width: '100%' }} spacing={2}>
			<Alert severity='success'>
				Gracias por su compra! su id de transacción es: {compraID}
			</Alert>
		</Stack>
	);
};

export default Message;