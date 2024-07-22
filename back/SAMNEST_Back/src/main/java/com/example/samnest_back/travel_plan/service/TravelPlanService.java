package com.example.samnest_back.travel_plan.service;

import com.example.samnest_back.travel_plan.entity.DailyScheduleEntity;
import com.example.samnest_back.travel_plan.entity.TravelPlanEntity;
import com.example.samnest_back.travel_plan.repository.DailyScheduleRepository;
import com.example.samnest_back.travel_plan.repository.TravelPlanRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class TravelPlanService {
    private final TravelPlanRepository travelPlanRepository;
    private final DailyScheduleRepository dailyScheduleRepository;

    public TravelPlanService(TravelPlanRepository travelPlanRepository,DailyScheduleRepository dailyScheduleRepository) {
        this.travelPlanRepository = travelPlanRepository;
        this.dailyScheduleRepository = dailyScheduleRepository;
    }

    public TravelPlanEntity createTravelPlan(String destination, LocalDate startDate, LocalDate endDate) {
        TravelPlanEntity travelPlanEntity = new TravelPlanEntity();
        travelPlanEntity.setDestination(destination);
        travelPlanEntity.setStartDate(startDate);
        travelPlanEntity.setEndDate(endDate);

        // startDate ~ endDate 까지 D-day 생성
        List<DailyScheduleEntity> dailySchedules = new ArrayList<>();
        for (LocalDate date = startDate; !date.isAfter(endDate); date = date.plusDays(1)) {
            DailyScheduleEntity dailyScheduleEntity = new DailyScheduleEntity();
            dailyScheduleEntity.setDate(date);
            dailyScheduleEntity.setTravelPlanEntity(travelPlanEntity);
            dailySchedules.add(dailyScheduleEntity);
        }

        travelPlanEntity.setDailySchedulesEntity(dailySchedules);

        // TravelPlan와 DailySchedules 저장
        TravelPlanEntity savedPlan = travelPlanRepository.save(travelPlanEntity);
        dailyScheduleRepository.saveAll(dailySchedules);

        return savedPlan;
    }   //쿼리문으로 travelPlan table 생성해야되고 현재 travelPlan과 day1~end 까지만 생성.
}
