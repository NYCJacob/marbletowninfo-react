import React, { Component } from 'react';
import ReactModal from 'react-modal';
import { Button, Typography} from '@smooth-ui/core-sc';


class IntroModal extends React.Component {
    constructor () {
        super();
        this.state = {
            showModal: true
        };
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal () {
        this.setState({ showModal: false });
    }

    render () {
        return (
            <div>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="What is Marbletowninfo.org?"
                    style={{
                        overlay: {
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        },
                        content: {
                            backgroundColor: 'rgba(255, 255, 255, 0.9)',
                            top: '25vh',
                            left: '25vw',
                            right: '25vw',
                            bottom: '25vh'
                        }
                    }}
                >
                    <Typography>
                        Some stuff
                    </Typography>
                    <Button onClick={this.handleCloseModal}>Close</Button>
                </ReactModal>
            </div>
        );
    }
}

export default IntroModal;