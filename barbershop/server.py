from flask import Flask, render_template, redirect, request
import csv


app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


# dynamic generation of page
@app.route('/<string:page_name>')
def any_page(page_name):
    return render_template(page_name)


# saving to TXT file
def write_data(data):
    with open('database.txt', mode='a') as database:
        date = data["date"]
        time = data["time"]
        customer = data["customer"]
        tel = data["tel"]
        database.write(
            f'\nCustomer: {customer}, Date: {date} on {time}, Number: {tel}')


# saving to CSV file
def write_csvdata(data):
    with open('database.csv', mode='a', newline='') as database2:
        date = data["date"]
        time = data["time"]
        customer = data["customer"]
        tel = data["tel"]

        csv_writer = csv.writer(database2, delimiter=',',
                                quotechar='|', quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([customer, date, time, tel])


# getting data from feedback form
@app.route('/submit_form', methods=['POST', 'GET'])
def submit_form():
    if request.method == "POST":
        try:
            data = request.form.to_dict()
            write_data(data)
            write_csvdata(data)
            return redirect('/')
        except:
            return 'did not save to database'
    else:
        return 'something went wrong. Try again!'
