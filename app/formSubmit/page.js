"use client"
import React, { useState } from 'react';
export default function formSubmit(){   
    return (
        <div>
            <input
                type="text"
                required
                name = "name"
                
                placeholder="Enter your name"   
            />

            <input type="number"></input>
            value= {questionNumber}
        </div>
    )
}