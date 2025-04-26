import React, { useState } from 'react';
import { Card, CardContent, Typography, Radio, RadioGroup, FormControlLabel, Button, LinearProgress } from '@mui/material';

export default function Poll() {
    const [selected, setSelected] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [votes, setVotes] = useState({
        option1: 5,
        option2: 8,
        option3: 2,
        option4: 1,
    });

    const options = [
        { value: 'option1', label: 'Option One' },
        { value: 'option2', label: 'Option Two' },
        { value: 'option3', label: 'Option Three' },
        { value: 'option4', label: 'Option Four' },
    ];

    const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

    const handleVote = () => {
        if (selected) {
            setVotes(prev => ({ ...prev, [selected]: prev[selected] + 1 }));
            setSubmitted(true);
        }
    };

    return (
        <Card sx={{ maxWidth: 400, margin: 'auto', mt: 5, p: 2, borderRadius: 4, boxShadow: 3 }}>
            <CardContent>
                <Typography variant="h6" align="center" gutterBottom>
                    What is your favorite option?
                </Typography>

                {!submitted ? (
                    <>
                        <RadioGroup value={selected} onChange={(e) => setSelected(e.target.value)}>
                            {options.map(opt => (
                                <FormControlLabel
                                    key={opt.value}
                                    value={opt.value}
                                    control={<Radio />}
                                    label={opt.label}
                                />
                            ))}
                        </RadioGroup>
                        <Button
                            variant="contained"
                            fullWidth
                            sx={{ mt: 2 }}
                            onClick={handleVote}
                            disabled={!selected}
                        >
                            Submit
                        </Button>
                    </>
                ) : (
                    <>
                        {options.map(opt => {
                            const percentage = ((votes[opt.value] / totalVotes) * 100).toFixed(1);
                            return (
                                <div key={opt.value} style={{ marginBottom: '1rem' }}>
                                    <Typography variant="body1">{opt.label} - {percentage}%</Typography>
                                    <LinearProgress
                                        variant="determinate"
                                        value={Number(percentage)}
                                        sx={{ height: 8, borderRadius: 5, backgroundColor: '#eee' }}
                                    />
                                </div>
                            );
                        })}
                    </>
                )}
            </CardContent>
        </Card>
    );
};

