import Add from '@mui/icons-material/Add';
import React, { useState, useEffect } from 'react';
import DoubtDialog from './DoubtDialog';
const FloatingActionButton = () => {
    const [showFab, setShowFab] = useState(true);
    const [isDialogOpen, setDialogOpen] = useState(false);


    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    return (
        <div>
            <div className={`fixed bottom-5 right-5 ${showFab ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'} transition-all duration-300 p-3`}>
                <button onClick={openDialog} className="bg-primary hover:bg-blue-600 text-white p-4 rounded-full shadow-lg">
                    <Add />
                </button>
            </div>
            <DoubtDialog isOpen={isDialogOpen} onClose={closeDialog} />
        </div>
    );
};

export default FloatingActionButton;
