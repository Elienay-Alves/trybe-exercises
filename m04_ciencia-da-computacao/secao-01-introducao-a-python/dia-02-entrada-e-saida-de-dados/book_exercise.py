import json
import csv


def retrieve_books(file: list[dict[str, str]]):
    """Recupera o arquivo books"""
    return json.load(file)


def count_books_by_categories(books):
    """Calcula a quantidade de livros por categoria"""
    categories = {}
    for book in books:
        for category in book["categories"]:
            if not categories.get(category):
                categories[category] = 0
            categories[category] += 1

    return categories


def calculate_percentage_by_category(book_count_by_category, total_books):
    """Calcula o percentual de livros"""
    return [
        [category, num_books / total_books]
        for category, num_books in book_count_by_category.items()
    ]


def write_csv_report(file, header, rows):
    """Escreve o csv"""
    writer = csv.writer(file)
    writer.writerow(header)
    writer.writerows(rows)


if __name__ == "__main__":
    with open("books.json") as file:
        books = retrieve_books(file)

    book_count = count_books_by_categories(books)
    n_of_books = len(books)
    percentage = calculate_percentage_by_category(book_count, n_of_books)

    header = ["categoria", "porcentagem"]
    with open("report.csv", mode="w") as file:
        write_csv_report(file, header, percentage)
