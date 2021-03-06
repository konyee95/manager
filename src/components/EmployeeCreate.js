import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class EmployeeCreate extends Component{
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label="Phone"
                        placeholder="010-55555555"
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        label=""
                    />
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default EmployeeCreate;