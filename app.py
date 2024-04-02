from flask import Flask, render_template, request
import os


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/process_instruction', methods=['POST'])
def process_instruction():
    instruction = request.form['instruction']
    # Process the instruction and return a response
    # ...
    return 'Instruction received: ' + instruction

if __name__ == '__main__':
    app.run(debug=True)