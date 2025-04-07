from django.shortcuts import render
from django.http import JsonResponse, HttpResponseNotFound
from .models import Company, Vacancy

def company_list(request):
    companies = Company.objects.all().values('id', 'name', 'description', 'city', 'address')
    return JsonResponse(list(companies), safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.values('id', 'name', 'description', 'city', 'address').get(id=id)
        return JsonResponse(company)
    except Company.DoesNotExist:
        return HttpResponseNotFound("Компания не найдена")

def company_vacancies(request, id):
    vacancies = Vacancy.objects.filter(company_id=id).values('id', 'name', 'description', 'salary')
    return JsonResponse(list(vacancies), safe=False)

def vacancy_list(request):
    vacancies = Vacancy.objects.all().values('id', 'name', 'description', 'salary', 'company_id')
    return JsonResponse(list(vacancies), safe=False)

def vacancy_detail(request, id):
    try:
        vacancy = Vacancy.objects.values('id', 'name', 'description', 'salary', 'company_id').get(id=id)
        return JsonResponse(vacancy)
    except Vacancy.DoesNotExist:
        return HttpResponseNotFound("Вакансия не найдена")

def top_ten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary').values('id', 'name', 'description', 'salary', 'company_id')[:10]
    return JsonResponse(list(vacancies), safe=False)
